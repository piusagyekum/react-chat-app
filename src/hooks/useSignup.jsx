import { useState } from "react"
import { auth } from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useAuthContext } from '../context/AuthContext'

export const useSignup = () => {
  const {dispatch} = useAuthContext()
  
  const [error, setError] = useState()
  const [credentails, setCredentials] = useState()

  const signupFn = async (payload) => {
    const { email, password } = payload
    try {
      setError("")
      const response = await createUserWithEmailAndPassword(auth, email, password)
      console.log(response.user)
      setCredentials(response.user)
      dispatch({type:"LOGIN",payload:response.user})
    } catch (error) {
      console.log(error)
      if (error.message.includes("email-already-in-use")) return setError("Email is already in use")
      if (error.message.includes("password")) return setError("Password not strong enough")
      if (error.message.includes("invalid")) return setError("Invalid Email")
      setError(error.message)
    }
  }
  return { signupFn, error, credentails }
}
