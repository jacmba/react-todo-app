import { useNavigate } from "react-router-dom"
import { useAuth } from "../security/AuthContext"

const LogoutComponent = () => {

  const navigate = useNavigate()

  const {isAuthenticated, setAuthenticated} = useAuth()

  const logout = () => {
    sessionStorage.removeItem('user')
    setAuthenticated(false)
    navigate('/login')
  }

  if (isAuthenticated) {
    return ( 
      <button className='logoutButton' onClick={logout}>
        Logout
      </button>
    )
  }
}

export default LogoutComponent