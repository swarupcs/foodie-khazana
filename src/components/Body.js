import React, { useState } from 'react'

const Body = () => {
    const[searchText, setSearchText] = useState("")
  return (
    <div className='search-container p-5 bg-pink-50 my-5'>
      <input 
      type="text" 
      className='focus:bg-green-200 p-2 m-2'
      placeholder='Search'
      value={searchText}
      onChange={(e) => {
        
      }}
      />
    </div>
  )
}

export default Body
