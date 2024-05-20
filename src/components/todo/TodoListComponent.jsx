import { useNavigate } from "react-router-dom"

const TodoListComponent = () => {

  const navigate = useNavigate()
  
  const username = sessionStorage.getItem('user')

  if (!username) {
    setTimeout(() => navigate('/login'), 100)
  }

  const today = new Date()
  const targetDate = new Date(
    today.getFullYear() + 12,
    today.getMonth(),
    today.getDay()
  )

  const todos = [
    {id: 1, description: 'Learn AWS', done: false, targetDate},
    {id: 2, description: 'Learn FullStack', done: false, targetDate},
    {id: 3, description: 'Learn DevOps', done: false, targetDate},
  ]

  return (
    <div className="TodoListComponent">
      <h1>Things to do</h1>
      <div>
        <table>
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
                <tr key="{todo.id}">
                  <td>{todo.id}</td>
                  <td>{todo.description}</td>
                  <td>{todo.done ? 'YES' : 'NO'}</td>
                  <td>{todo.targetDate.toDateString()}</td>
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