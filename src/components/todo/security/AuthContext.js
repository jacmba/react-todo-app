import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

const useAuth = () => useContext(AuthContext)

const AuthProvider = ({children}) => {

  const [isAuthenticated, setAuthenticated] = useState(false)

  return (
    <AuthContext.Provider value={{isAuthenticated, setAuthenticated}}>
      {children}
    </AuthContext.Provider>
  )
}

export {AuthContext, useAuth}
export default AuthProvider