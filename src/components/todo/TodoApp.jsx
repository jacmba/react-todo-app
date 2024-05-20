import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './TodoApp.css'
import LoginComponent from "./login/LoginComponent"
import WelcomeComponent from './welcome/WelcomeComponent'
import ErrorComponent from './error/ErrorComponent'
import TodoListComponent from './TodoListComponent'
import HeaderComponent from './common/HeaderComponent'
import FooterComponent from './common/FooterComponent'

const TodoApp = () => {

  return (
    <div className="container">
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
        <Route path='/' element={<LoginComponent />}></Route>
          <Route path='/login' element={<LoginComponent />}></Route>
          <Route path='/welcome' element={<WelcomeComponent />}></Route>
          <Route path='*' element={<ErrorComponent />}></Route>
          <Route path='/todos' element={<TodoListComponent />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  )
}

export default TodoApp