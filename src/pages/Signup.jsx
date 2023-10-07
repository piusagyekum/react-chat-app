import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { useSignup } from "../hooks/useSignup"

const Signup = () => {
  const { signupFn, error, loading } = useSignup()
  const signupForm = useForm()
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    getValues,
  } = signupForm

  const handleSignup = async (formData) => {
    await signupFn(formData)
    if (!error) reset()
   
  }
  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gray-200 gap-4">
      <h1 className="text-5xl font-bold tracking-widest text-[var(--clr-accent)]">
        P<span className="text-red-500">i</span>Chat
      </h1>
      <div className="text-lg w-[396px] py-5 px-8 rounded-lg shadow-md bg-white">
        <form action="" noValidate onSubmit={handleSubmit(handleSignup)}>
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
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors?.email?.message && <p className="text-red-500 text-xs px-1">{errors.email.message}</p>}
          </div>
          <div className="form-control mb-5">
            <label htmlFor="username" className=" block text-base">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full leading-10 border pl-3 outline-none focus:border-blue-600 rounded text-base"
              {...register("username", {
                required: "Username is required",
              })}
            />
            {errors?.username?.message && <p className="text-red-500 text-xs px-1">{errors.username.message}</p>}
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
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors?.password?.message && <p className="text-red-500 text-xs px-1">{errors.password.message}</p>}
          </div>
          <div className="form-control mb-5">
            <label htmlFor="Confirm Password" className=" block text-base">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              className="w-full leading-10 border pl-3 outline-none focus:border-blue-600 rounded text-base"
              {...register("confirm_password", {
                required: "Confirm your password",
                validate: (value) => {
                  const pass = getValues("password")
                  return value === pass || "Password does not match"
                },
              })}
            />
            {errors?.confirm_password?.message && <p className="text-red-500 text-xs px-1">{errors.confirm_password.message}</p>}
          </div>
          <input
            type="submit"
            value={loading ? "Signing up..." : "Sign up"}
            disabled={loading}
            className="w-full py-2 b rounded bg-[var(--clr-accent)] text-white text-lg font-semibold mb-7 cursor-pointer"
          />
          <hr />
          <p className="my-3">
            Already have an account? <Link className="font-semibold text-[var(--clr-accent)] " to={`/`}>Log in</Link>
          </p>
        </form>
      </div>
    </main>
  )
}

export default Signup
