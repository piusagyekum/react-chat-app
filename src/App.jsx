import {Route, Routes}  from "react-router-dom"
import Login from "./pages/Login"
import { Fragment } from "react"
import Signup from "./pages/Signup"
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
 