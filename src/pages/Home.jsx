import { BsPeopleFill } from "react-icons/bs"
import { BiSolidCommentAdd } from "react-icons/bi"
import { IoMdMore } from "react-icons/io"
import Search from "../components/Search"
import ChatList from "../components/ChatList"
import { useState } from "react"
import { useLogout } from "../hooks/useLogout"
import SearchedUsersLIst from "../components/SearchedUsersLIst"

const Home = () => {
  const { handleLogout } = useLogout()
  const [options, setOptions] = useState(false)
  const [searchedUsers, setSearchedUsers] = useState([])
  const [input, setInput] = useState("")

  return (
    <main className="h-screen flex min-w-1/2 overflow-x-auto">
      <div className="flex-[1] flex flex-col border">
        <div className="flex items-center py-3 px-2 border relative">
          {/* profile photo */}
          <img
            src="https://images.unsplash.com/photo-1682687221038-404cb8830901?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
            alt="profile photo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <BsPeopleFill size={25} color="var(--clr-accent)" className="opacity-60 ml-auto mr-5 cursor-not-allowed" />
          <BiSolidCommentAdd size={25} color="var(--clr-accent)" className="opacity-60 mr-5 cursor-not-allowed" />
          <IoMdMore
            size={25}
            color="var(--clr-accent)"
            className="opacity-60 cursor-pointer"
            onClick={() => {
              setOptions(!options)
            }}
          />
          {options && (
            <div className="border absolute top-[60px] right-3 p-2 px-5 rounded font-medium cursor-pointer select-none logout" onClick={handleLogout}>
              Logout
            </div>
          )}
        </div>
        <Search setSearchedUsers={setSearchedUsers} input={input} setInput={setInput} />
        {input ? <SearchedUsersLIst searchedUsers={searchedUsers} /> : <ChatList />}
      </div>
      <div className="flex-[2] border"></div>
    </main>
  )
}

export default Home
