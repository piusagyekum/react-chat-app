import { BsPeopleFill } from "react-icons/bs"
import { BiSolidCommentAdd } from "react-icons/bi"
import { IoMdMore } from "react-icons/io"
import Search from "../components/Search"

const Home = () => {
  return (
    <main className="h-screen flex min-w-1/2 overflow-x-auto">
      <div className="flex-[1] border">
        <div className="flex items-center py-3 px-2 border">
          {/* profile photo */}
          <img
            src="https://images.unsplash.com/photo-1682687221038-404cb8830901?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
            alt="profile photo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <BsPeopleFill size={25} color="var(--clr-accent)" className="opacity-60 ml-auto mr-5" />
          <BiSolidCommentAdd size={25} color="var(--clr-accent)" className="opacity-60 mr-5" />
          <IoMdMore size={25} color="var(--clr-accent)" className="opacity-60 " />
        </div>
        <Search/>
      </div>
      <div className="flex-[2] border"></div>
    </main>
  )
}

export default Home
