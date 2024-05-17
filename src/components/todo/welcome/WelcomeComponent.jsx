import { useNavigate } from "react-router-dom"

const WelcomeComponent = () => {

  const navigate = useNavigate()
  
  const username = sessionStorage.getItem('user')

  if (!username) {
    setTimeout(() => navigate('/login'), 100)
  }

  return (
    <div className="Welcome">
      Welcome {username}!
    </div>
  )
}

export default WelcomeComponent