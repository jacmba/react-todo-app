import { Link } from "react-router-dom"

const WelcomeComponent = () => {

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