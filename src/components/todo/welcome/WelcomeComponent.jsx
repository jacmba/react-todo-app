import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../security/AuthContext"

const WelcomeComponent = () => {

  const navigate = useNavigate()
  
  const {isAuthenticated} = useAuth()

  if (!isAuthenticated) {
    setTimeout(() => navigate('/login'), 100)
  }

  const username = sessionStorage.getItem('user')

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