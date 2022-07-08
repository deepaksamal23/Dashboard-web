import React from 'react'
// import { useContext } from 'react'
import Paging from './components/Paging'
import Posts from './components/Posts'
import Search from './components/Search'
// import { createvalue } from './Context'
import './App.css'
const App = () => {
  // const data=useContext(createvalue);
  return (
    <div>

    <Search />
    <Paging/>
    <Posts/>
    </div>
  )
}

export default App