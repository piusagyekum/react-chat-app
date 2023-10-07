import { Navigate, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import Test from "./pages/Test"
import { AuthContext, useAuthContext } from "./context/AuthContext"
import { useContext } from "react"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          index
          element={
            <AuthorizedRoute>
              <Login />
            </AuthorizedRoute>
          }
        />
        <Route
          path="signup"
          element={
            <AuthorizedRoute>
              <Signup />
            </AuthorizedRoute>
          }
        />
        <Route
          path="home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="test" element={<Test />} />
      </Routes>
    </div>
  )
}

export default App

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext()
  if (user) return children
  return <Navigate to="/" />
}

const AuthorizedRoute = ({ children }) => {
  const { user } = useAuthContext()
  if (user) return <Navigate to="/home" />
  return children
}
