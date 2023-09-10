import {Route, Routes}  from "react-router-dom"
import Login from "./pages/Login"
import { Fragment } from "react"
import Signup from "./pages/Signup"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
 