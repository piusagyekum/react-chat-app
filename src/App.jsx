import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import Test from "./pages/Test"
import { useAuthContext } from "./context/AuthContext"

function App() {
  const { user } = useAuthContext()
  return (
    <div className="App">
      <Routes>
        <Route index element={user ? <Home /> : <Login />} />
        <Route path="signup" element={user ? <Home /> : <Signup />} />
        <Route path="home" element={!user ? <Login /> : <Home />} />
        <Route path="test" element={<Test />} />
      </Routes>
    </div>
  )
}

export default App
