import { useAuthContext } from "../context/AuthContext"
import { signOut } from "firebase/auth"
import { auth } from "../firebase"

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const handleLogout = async () => {
    try {
      await signOut(auth)
      dispatch({ type: "LOGOUT" })
      localStorage.removeItem("user")
    } catch (error) {
      console.log(error)
    }
  }
  return { handleLogout }
}
