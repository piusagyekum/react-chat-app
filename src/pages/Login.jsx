import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"
import { useAuthContext } from "../context/AuthContext"
import { useState } from "react"

const Login = () => {
  const { dispatch } = useAuthContext()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const loginForm = useForm()
  const [error, setError] = useState("")
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = loginForm

  const handleLogin = async (formData) => {
    try {
      setError("")
      setLoading(true)
      const { email, password } = formData
      const response = await signInWithEmailAndPassword(auth, email, password)
      if (!response.user) throw Error(response.error)
      dispatch({ type: "LOGIN", payload: response.user })
      localStorage.setItem("user", JSON.stringify(response.user))
      navigate("/home", { replace: true })
    } catch (error) {
      console.log("🚀 ~ file: Login.jsx:27 ~ handleLogin ~ error:", error)
      if (error.message.includes("invalid-login-credentials")) return setError("Invalid Login Credentials")
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }
  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gray-200 gap-4">
      <h1 className="text-5xl font-bold tracking-widest text-[var(--clr-accent)]">
        P<span className="text-red-500">i</span>Chat
      </h1>
      <div className="text-lg w-[396px] py-5 px-8 rounded-lg shadow-md bg-white">
        <form action="" noValidate onSubmit={handleSubmit(handleLogin)}>
          {error && <div className="leading-10 bg-red-100 text-red-500 px-3 border border-red-500 rounded mb-2">{error}</div>}
          <div className="form-control mb-5">
            <label htmlFor="email" className="block text-base">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full leading-10 border pl-3 outline-none focus:border-blue-600 rounded text-base"
              {...register("email")}
            />
            {errors?.email?.message && <p className="">{errors.email.message}</p>}
          </div>
          <div className="form-control mb-5">
            <label htmlFor="password" className=" block text-base">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full leading-10 border pl-3 outline-none focus:border-blue-600 rounded text-base"
              {...register("password")}
            />
            {errors?.password?.message && <p className="">{errors.password.message}</p>}
          </div>
          <input
            type="submit"
            value={loading ? "Logging in..." : "Log in"}
            disabled={loading}
            className="w-full py-2 b rounded bg-accent/90  hover:bg-accent text-white text-lg font-semibold mb-7 cursor-pointer"
          />
          <hr />
          <p className="my-3">
            Don&apos;t have an account?{" "}
            <Link className="font-semibold text-[var(--clr-accent)]" to={"/signup"}>
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </main>
  )
}

export default Login
