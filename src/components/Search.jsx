import React, { Fragment } from "react"
import { RiMenu5Fill } from "react-icons/ri"
import { CiSearch } from "react-icons/ci"
import { useState } from "react"
import { collection, doc, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase"

const Search = ({ setSearchedUsers, input, setInput }) => {
  //search for user
  const handleSearch = async () => {
    const users = []
    const q = query(collection(db, "users"), where("displayName", "==", input))
    try {
      const res = await getDocs(q)
      if (!res.docs) throw Error(res.error)
      res.docs.forEach((doc) => {
        users.push({ ...doc.data() })
      })
      setSearchedUsers(users)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <section className="p-3 flex items-center gap-3">
      <div className="flex flex-1 border rounded-lg items-center gap-3">
        <CiSearch size={20} className="ml-2" />
        <input
          type="text"
          className="flex-1 bg-transparent outline-none leading-7"
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
          }}
          onKeyDown={(e) => {
            e.key === "Enter" && handleSearch()
          }}
        />
      </div>
      <RiMenu5Fill />
    </section>
  )
}

export default Search
