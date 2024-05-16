import './TodoApp.css'
import LoginComponent from "./login/LoginComponent"

const TodoApp = () => {

  return (
    <div className="TodoApp">
      <h1>My ToDo App!</h1>
      <LoginComponent></LoginComponent>
    </div>
  )
}

export default TodoApp