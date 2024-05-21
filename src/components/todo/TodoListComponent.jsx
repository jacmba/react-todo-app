import { useEffect, useState } from "react"
import {deleteUserTodo, retrieveUserTodos} from "./api/TodoApiService"

const TodoListComponent = () => {

  const today = new Date()
  const targetDate = new Date(
    today.getFullYear() + 12,
    today.getMonth(),
    today.getDay()
  )

  const username = sessionStorage.getItem('user')

  /*const todos = [
    {id: 1, description: 'Learn AWS', done: false, targetDate},
    {id: 2, description: 'Learn FullStack', done: false, targetDate},
    {id: 3, description: 'Learn DevOps', done: false, targetDate},
  ]*/

  const [todos, setTodos] = useState([])

  const [message, setMessage] = useState(null)

  const refreshTodos = async () => {
    const result = await retrieveUserTodos(username)
    console.log(result)
    setTodos(result)
  }

  const deleteTodo = async id => {
    console.log(`Delete todo ${id}`)
    try {
      await deleteUserTodo(username, id)
      refreshTodos()
      setMessage(`ToDo ${id} successfully deleted`)
      console.log('ToDo deleted')
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    refreshTodos()
  }, [])

  return (
    <div className="TodoListComponent">
      <h1>Things to do</h1>
      {message && <div className="alert alert-warning">{message}</div>}
      <div className="mt-5">
        <table className="table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Done?</th>
              <th>Target Date</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              todos.map(todo => (
                <tr key={todo.id}>
                  <td>{todo.description}</td>
                  <td>{todo.done ? 'YES' : 'NO'}</td>
                  <td>{todo.targetDate}</td>
                  <td><button className="btn btn-warning"
                    onClick={() => deleteTodo(todo.id)}>
                    Delete
                  </button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TodoListComponent