import React from 'react'
import { useGlobalContext } from '../Context'
// import { createvalue } from '../Context'
const Search = () => {
  const {query,searchPost}=useGlobalContext()
// const first = useContext(createvalue)

  return (
    <div>
    <h1>TECH INFORMATION</h1>
    <form >
      <div>
        <input type="text" placeholder='Search Here'
        value={query}
        onChange={(e)=>searchPost(e.target.value)}
         />
      </div>
    </form>
    </div>
  )
}

export default Search