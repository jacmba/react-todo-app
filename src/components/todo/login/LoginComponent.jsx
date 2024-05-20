import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../security/AuthContext"

const LoginComponent = () => {

  const [{username, password}, setState] = useState({
    username: '',
    password: ''
  })

  const [showSuccess, setSuccess] = useState(false)

  const [showError, setError] = useState(false)

  const navigate = useNavigate()

  const {isAuthenticated, setAuthenticated} = useAuth()

  const setUserName = evt => setState({
    username: evt.target.value,
    password
  })

  const setPassword = evt => setState({
    username,
    password: evt.target.value
  })

  const submit = () => {
    if (username === 'jdoe' && password === '123456') {
      console.log('Sucess!')
      setSuccess(true)
      setError(false)
      sessionStorage.setItem('user', username)
      setAuthenticated(true)
      navigate('/welcome')
    } else {
      console.log('Login failed!')
      setSuccess(false)
      setError(true)
      setAuthenticated(false)
    }
  }

  if (isAuthenticated) {
    setTimeout(() => navigate('/welcome'), 100)
  }

  return (
    <div className="LoginComponent">
      {showSuccess && 
        <div className="successMessage">Authenticated successfully</div>}
      {showError &&
        <div className="errorMessage">Authentication Failed</div>}
      <div className="LoginForm">
        <div>
          <label>User Name</label>
          <input type="text"
            name="username"
            placeholder="Enter your name"
            value={username}
            onChange={setUserName} />
        </div>
        <div>
          <label>Password</label>
          <input type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={setPassword} />
        </div>
        <div>
          <button type="button" name="login" onClick={submit}>
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginComponent