import { collection, doc, onSnapshot } from "firebase/firestore"
import { useEffect } from "react"
import { db } from "../firebase"
import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"

const ChatList = () => {
  const { user } = useAuthContext()
  const [chatList, setChatList] = useState([])
  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, "userChats", user.uid), (snapshot) => {
      const chatlist = []
      snapshot.docs.forEach((doc) => {
        chatlist.push({ ...doc.data(), id: doc.id })
      })
      setChatList(chatlist)
    })
    return () => {
      unsubscribe()
    }
  }, [])
  return (
    <div className="border flex-1 flex">
      {chatList.length !== 0 ? (
        chatList.map((chat, index) => (
          <div className="" key={index}>
            <p>{chat.name}</p>
          </div>
        ))
      ) : (
        <div className="self-center w-fit mx-auto">Search users to chat</div>
      )}
    </div>
  )
}

export default ChatList
