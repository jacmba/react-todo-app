import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { createTodo, retrieveSingleTodo, updateTodo } from "./api/TodoApiService"
import { ErrorMessage, Field, Form, Formik } from "formik"

const TodoComponent = () => {
  
  const {id} = useParams()

  const [description, setDescription] = useState('')
  
  const [done, setDone] = useState(false)

  const [targetDate, setTargetDate] = useState(new Date())

  const navigate = useNavigate()

  const username = sessionStorage.getItem('user')

  const loadTodo = async () => {
    const {data} = await retrieveSingleTodo(username, id)
    console.log(data)
    setDescription(data.description)
    setDone(!!data.isDone)
    setTargetDate(data.targetDate)
  }

  const submit = async values => {
    const todo = {
      id,
      username,
      description: values.description,
      targetDate: values.targetDate,
      done      
    }

    console.log(todo)

    const fTodo = id ? updateTodo : createTodo

    try {
      await fTodo(username, todo)
      navigate('/todos')
    } catch (e) {
      console.error(e)
    }
  }

  const validate = values => {
    const err = {}
    console.log(values)

    if (values.description.length < 5) {
      err.description = 'Enter at least 5 characters'
    }

    if (!values.targetDate) {
      err.targetDate = 'Enter a valid date'
    }

    return err
  }

  useEffect(() => {
    if (id) {
      loadTodo()
    }
  })

  const formAction = id ? 'Save' : 'Create'

  return (
    <div className="container">
      <h1>Enter ToDo details</h1>
      <div>
        <Formik initialValues={{description, targetDate, done}}
          enableReinitialize="true"
          onSubmit={submit}
          validate={validate}
          validateOnChange={false} >
          {
            props =>  (
              <Form>
                <ErrorMessage
                  name="description"
                  component="div"
                  className="alert alert-warning" />
                <ErrorMessage
                  name="targetDate"
                  component="div"
                  className="alert alert-warning" />
                <fieldset className="form-group" >
                  <label>Description</label>
                  <Field type="text"
                    className="form-control"
                    name="description" />
                </fieldset>
                <fieldset className="form-group" >
                  <label>Target Date</label>
                  <Field type="date"
                    className="form-control"
                    name="targetDate" />
                </fieldset>
                <div>
                  <button className="btn btn-success" type="submit">
                    {formAction}
                  </button>
                </div>
              </Form>
            )
          }
        </Formik>
      </div>
    </div>
  )
}

export default TodoComponent