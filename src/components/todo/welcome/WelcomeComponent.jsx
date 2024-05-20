import { Link, useNavigate } from "react-router-dom"

const WelcomeComponent = () => {

  const navigate = useNavigate()
  
  const username = sessionStorage.getItem('user')

  if (!username) {
    setTimeout(() => navigate('/login'), 100)
  }

  return (
    <div className="Welcome">
      <h1>Welcome {username}!</h1>
      <div>
        <Link to="/todos">Manage your ToDos</Link>
      </div>
    </div>
  )
}

export default WelcomeComponent