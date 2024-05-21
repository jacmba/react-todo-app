import { useEffect, useState } from "react"
import retrieveUserTodos from "./api/TodoApiService"

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

  const refreshTodos = async () => {
    const result = await retrieveUserTodos(username)
    console.log(result)
    setTodos(result)
  }

  useEffect(() => {
    refreshTodos()
  }, [])

  return (
    <div className="TodoListComponent">
      <h1>Things to do</h1>
      <div>
        <table className="table">
          <thead>
            <tr>
              <td>ID</td>
              <td>Description</td>
              <td>Done?</td>
              <td>Target Date</td>
            </tr>
          </thead>
          <tbody>
            {
              todos.map(todo => (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.description}</td>
                  <td>{todo.done ? 'YES' : 'NO'}</td>
                  <td>{todo.targetDate}</td>
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