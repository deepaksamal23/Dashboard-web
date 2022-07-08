import React,{useEffect} from "react"
import {  useReducer,useContext } from "react"
import { createContext } from "react"
import reducer from "./reducer"

let API =('https://hn.algolia.com/api/v1/search?')
const initialState = {
       isloading:true,
      query: "CSS",
      page: 0,
      nbPages: 0,
      hits: []
}
const createvalue = createContext()

const AppProvider = ({ children }) => {


      const [state, dispatch] = useReducer(reducer, initialState)
      const fetchdata= async(url)=>{
            dispatch({
                  type:'PAGE_LOADING'
            })
          try {
            const res=await fetch(url);
            const data= await res.json();
console.log(data);
dispatch({
   type:'GET NEWS',
   payload:{
      hits:data.hits,
      nbPages:data.nbPages,
   }

})
          } catch (error) {
            console.log(error);
            
          }
          }

// Remove post
const removePost =(post_id)=>{
      dispatch({
            type:'REMOVE_POST', 
            payload:post_id

      })
      
}
// search data 
const searchPost=(Searchpost)=>{
      dispatch({
            type:'SEARCH_POST',
            payload:Searchpost,
      })
}
// pagination
const prevPage=()=>{
      dispatch({
            type:"PREV_PAGE"
      })
}
const nextPA=()=>{
      dispatch({
            type:'NEXT_PAGE'
      })
}
          useEffect(() => {
         fetchdata(`${API}query=${state.query}&page=${state.page}`);
          }, [state.query,state.page])
      return (
            <createvalue.Provider value={{...state,removePost,searchPost,prevPage,nextPA}}>
                  {children}
            </createvalue.Provider>
      )
}

const useGlobalContext=()=>{
      return useContext(createvalue)
}

export {createvalue,AppProvider,useGlobalContext };