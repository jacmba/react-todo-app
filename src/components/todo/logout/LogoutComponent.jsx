import { useNavigate } from "react-router-dom"
import { useAuth } from "../security/AuthContext"

const LogoutComponent = () => {

  const navigate = useNavigate()

  const {isAuthenticated, logout} = useAuth()

  const submit = () => {
    logout()
    navigate('/login')
  }

  if (isAuthenticated) {
    return ( 
      <button className='logoutButton' onClick={submit}>
        Logout
      </button>
    )
  }
}

export default LogoutComponent