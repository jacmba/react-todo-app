import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { retrieveSingleTodo, updateTodo } from "./api/TodoApiService"
import { Field, Form, Formik } from "formik"

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
    setDone(data.isDone)
    setTargetDate(data.targetDate)
  }

  const submit = async values => {
    const todo = {
      id,
      username,
      description: values.description,
      targetDate: new Date(values.targetDate),
      done      
    }

    console.log(todo)

    try {
      await updateTodo(username, todo)
      navigate('/todos')
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    loadTodo()
  })

  return (
    <div className="container">
      <h1>Enter ToDo details</h1>
      <div>
        <Formik initialValues={{description, targetDate, done}}
          enableReinitialize="true"
          onSubmit={submit} >
          {
            props =>  (
              <Form>
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
                    Save
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