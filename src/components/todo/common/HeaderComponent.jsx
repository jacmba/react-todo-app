import { Link } from "react-router-dom"
import LogoutComponent from "../logout/LogoutComponent"
import { useAuth } from '../security/AuthContext'

const HeaderComponent = () => {

  const {isAuthenticated} = useAuth()
  return (
    <header className="border-bottom border-light border-5 mb-5 p-2">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                {
                  isAuthenticated &&
                  <li className="nav-item"><Link className="nav-link" to="/todos">ToDos</Link></li>
                }
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <LogoutComponent />
    </header>
  )
}

export default HeaderComponent