const SearchedUsersLIst = ({ searchedUsers }) => {
    const handleAddUser = () => { 

     }
  return (
    <div className="border flex-1 flex">
      {searchedUsers.length !== 0 ? (
        searchedUsers.map((chat, index) => (
          <div className="" key={index} onClick={() => { handleAddUser(chat.uid) }}>
            <p>{chat?.displayName}</p>
          </div>
        ))
      ) : (
        <div className="self-center w-fit mx-auto">No user found</div>
      )}
    </div>
  )
}

export default SearchedUsersLIst
