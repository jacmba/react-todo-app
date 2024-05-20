import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

const useAuth = () => useContext(AuthContext)

const AuthProvider = ({children}) => {

  const [isAuthenticated, setAuthenticated] = useState(false)

  const login = (username, password) => {
    if (username === 'jdoe' && password === '123456') {
      console.log('Login sucess!')
      sessionStorage.setItem('user', username)
      setAuthenticated(true)
      return true
    } else {
      console.log('Login failed!')
      setAuthenticated(false)
      return false
    }
  }

  const logout = () => {
    sessionStorage.removeItem('user')
    setAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      login,
      logout
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export {AuthContext, useAuth}
export default AuthProvider