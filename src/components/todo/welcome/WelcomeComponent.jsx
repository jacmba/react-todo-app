import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import retrieveHelloWorld from "../api/HelloWorldApiService"

const WelcomeComponent = () => {

  const username = sessionStorage.getItem('user')

  const [message, setMessage] = useState(null)

  const callHelloApi = async () => {
    const result = await retrieveHelloWorld(username)
    setMessage(result)
  }

  return (
    <div className="Welcome">
      <h1>Welcome {username}!</h1>
      <div>
        <Link to="/todos">Manage your ToDos</Link>
      </div>
      <div>
        <button className="btn btn-success m-5" onClick={callHelloApi}>
          Call Hello World
        </button>
      </div>
      <div className="text-info">{message}</div>
    </div>
  )
}

export default WelcomeComponent