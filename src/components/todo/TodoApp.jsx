import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import './TodoApp.css'
import LoginComponent from "./login/LoginComponent"
import WelcomeComponent from './welcome/WelcomeComponent'
import ErrorComponent from './error/ErrorComponent'
import TodoListComponent from './TodoListComponent'
import HeaderComponent from './common/HeaderComponent'
import FooterComponent from './common/FooterComponent'
import AuthProvider, { useAuth } from './security/AuthContext'
import TodoComponent from './TodoComponent'

const AuthenticatedRoute = ({children}) => {
  const {isAuthenticated} = useAuth()
  if (isAuthenticated) {
    return children
  }

  return <Navigate to="/" />
}

const TodoApp = () => {

  return (
    <div className="container">
      <AuthProvider>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
          <Route path='/' element={<LoginComponent />} />
            <Route path='/login' element={<LoginComponent />} />
            <Route path='*' element={<ErrorComponent />} />
            <Route path='/welcome' element={
              <AuthenticatedRoute>
                <WelcomeComponent />
              </AuthenticatedRoute>
            } />
            <Route path='/todos' element={
              <AuthenticatedRoute>
                <TodoListComponent />
              </AuthenticatedRoute>
            } />
            <Route path='/todo/:id' element={
              <AuthenticatedRoute>
                <TodoComponent />
              </AuthenticatedRoute>
            } />
            <Route path='/todo/new' element={
              <AuthenticatedRoute>
                <TodoComponent />
              </AuthenticatedRoute>
            } />
          </Routes>
          <FooterComponent />
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default TodoApp