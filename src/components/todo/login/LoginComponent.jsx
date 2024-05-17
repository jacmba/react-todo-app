import { useState } from "react"

const LoginComponent = () => {

  const [{username, password}, setState] = useState({
    username: '',
    password: ''
  })

  const [showSuccess, setSuccess] = useState(false)

  const [showError, setError] = useState(false)

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
    } else {
      console.log('Login failed!')
      setSuccess(false)
      setError(true)
    }
  }

  return (
    <div className="LoginComponent">
      <SuccessMessageComponent success={showSuccess} />
      <ErrorMessageComponent error={showError} />
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

const SuccessMessageComponent = props => {
  if (props.success) {
    return <div className="successMessage">Authenticated successfully</div>
  } else {
    return <></>
  }
}

const ErrorMessageComponent = props => {
  if (props.error) {
    return <div className="errorMessage">Authentication Failed</div>
  } else {
    return <></>
  }
}

export default LoginComponent