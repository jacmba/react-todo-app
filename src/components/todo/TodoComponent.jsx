import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { retrieveSingleTodo } from "./api/TodoApiService"

const TodoComponent = () => {
  
  const {id} = useParams()

  const [description, setDescription] = useState('')
  
  // const [done, setDone] = useState(false)

  const username = sessionStorage.getItem('user')

  const loadTodo = async () => {
    const {data} = await retrieveSingleTodo(username, id)
    console.log(data)
    setDescription(data.description)
  }

  useEffect(() => {
    loadTodo()
  }, [id])

  return (
    <div className="container">
      <h1>Enter ToDo details</h1>
      <div>
        <h2>{description}</h2>
      </div>
    </div>
  )
}

export default TodoComponent