import { useNavigate } from "react-router-dom"

const LogoutComponent = () => {

  const navigate = useNavigate()

  let loggedUser

  const logout = () => {
    sessionStorage.removeItem('user')
    window.dispatchEvent(new Event('logout'))
    navigate('/login')
  }

  const readUser = () => loggedUser = sessionStorage.getItem('user')

  window.addEventListener('login', readUser)

  readUser()

  if (!!!!loggedUser) {
    return ( 
      <button className='logoutButton' onClick={logout}>
        Logout
      </button>
    )
  }
}

export default LogoutComponent