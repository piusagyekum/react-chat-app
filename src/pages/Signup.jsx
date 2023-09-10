import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

const Signup = () => {
  const signupForm = useForm()
  const {
    register,
    formState: { errors },
  } = signupForm
  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gray-200 gap-4">
      <h1 className="text-5xl font-bold tracking-widest text-[var(--clr-accent)]">
        P<span className="text-red-500">i</span>Chat
      </h1>
      <div className="text-lg w-[396px] py-5 px-8 rounded-lg shadow-md bg-white">
        <form action="" noValidate>
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
            value="Sign up"
            className="w-full py-2 b rounded bg-[var(--clr-accent)] text-white text-lg font-semibold mb-7 cursor-pointer"
          />
          <hr />
          <p className="my-3">
            Already have an account?{" "}
            <Link className="font-semibold text-[var(--clr-accent)] ">Log in</Link>
          </p>
        </form>
      </div>
    </main>
  )
}

export default Signup
