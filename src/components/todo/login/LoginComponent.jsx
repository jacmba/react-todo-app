const LoginComponent = () => {

  return (
    <div className="LoginComponent">
      <div className="LoginForm">
        <div>
          <label>User Name</label>
          <input type="text" name="username" placeholder="Enter your name" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" placeholder="Enter your password" />
        </div>
        <div>
          <button type="button" name="login">
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginComponent