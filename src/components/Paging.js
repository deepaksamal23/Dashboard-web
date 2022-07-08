import React from 'react'
import { useGlobalContext } from '../Context'

const Paging = () => {
  const {page,nbPages,prevPage,nextPA}=useGlobalContext();   
    return (
    <div className='Pag_btn'>

    <button onClick={()=>prevPage()}>PREV</button>
    <p className='para'>
      {page+1} of {nbPages}
    </p>
    <button onClick={()=>nextPA()}>NEXT </button>
    </div>
  )
}

export default Paging