import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './TodoApp.css'
import LoginComponent from "./login/LoginComponent"
import WelcomeComponent from './welcome/WelcomeComponent'
import ErrorComponent from './error/ErrorComponent'

const TodoApp = () => {

  return (
    <div className="TodoApp">
      <h1>My ToDo App!</h1>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<LoginComponent />}></Route>
          <Route path='/login' element={<LoginComponent />}></Route>
          <Route path='/welcome' element={<WelcomeComponent />}></Route>
          <Route path='*' element={<ErrorComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default TodoApp