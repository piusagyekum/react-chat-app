import { useState } from "react"
import { auth, db, usersColRef } from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useAuthContext } from "../context/AuthContext"
import { addDoc, doc, setDoc } from "firebase/firestore"

export const useSignup = () => {
  const { dispatch } = useAuthContext()
  const [error, setError] = useState()
  const [credentails, setCredentials] = useState()
  const [loading, setLoading] = useState(false)

  const signupFn = async (payload) => {
    const { email, password, username } = payload
    try {
      setError("")
      setLoading(true)
      const response = await createUserWithEmailAndPassword(auth, email, password)
      if (!response) throw response.error
      //adding user to user collection
      await setDoc(doc(db, "users", response.user.uid), {
        uid: response.user.uid,
        email: response.user.email,
        displayName: username,
      })
      //creating chatlist for user
      await setDoc(doc(db, "userChats", response.user.uid), {})
      setCredentials(response.user)
      dispatch({ type: "LOGIN", payload: response.user })
      localStorage.setItem("user", JSON.stringify(response.user))
    } catch (error) {
      console.log(error)
      if (error.message.includes("email-already-in-use")) return setError("Email is already in use")
      if (error.message.includes("password")) return setError("Password not strong enough")
      if (error.message.includes("invalid")) return setError("Invalid Email")
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }
  return { signupFn, error, loading }
}
