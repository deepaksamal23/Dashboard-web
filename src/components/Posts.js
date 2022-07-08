import React from 'react'
import { useGlobalContext } from '../Context'
// import { createvalue } from './Context'
const Posts = () => {
  const { hits, isloading,removePost } = useGlobalContext()
  // let isloading=true;

  if (isloading) {
    return <>
      <h1>Loading...</h1>
    </>
  }
  return (
    <>
            <div className="parent">
      {
        hits.map((elem) => {
          const { title,author,url,num_comments,objectID}=elem
          return (
              <div className="card" key={objectID}>
                    <h2>{title}</h2>
                    <p>
                      by <span>{author}</span> | <span>{num_comments} </span> comments
                    </p>
                    <div className="card_btn">

                    <a href={url}  target='_blank'>
                      Read More
                    </a>
                    <a href="#" onClick={()=>removePost(objectID)}>Remove</a>
                    </div>
              </div>

          )

        })
      }
            </div>
    </>
  )
}

export default Posts