import React, { Fragment } from "react"
import { RiMenu5Fill } from "react-icons/ri"
import { CiSearch } from "react-icons/ci"

const Search = () => {
  return (
    <section className="p-3 flex items-center gap-3">
      <div className="flex flex-1 border rounded-lg items-center gap-3">
        <CiSearch size={20} className="ml-2"/>
        <input type="text" className="flex-1 bg-transparent outline-none leading-7" />
      </div>
      <RiMenu5Fill />
    </section>
  )
}

export default Search
