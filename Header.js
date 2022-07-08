// import React,{useContext} from 'react'
// import { chup } from './src/App'

// const Header = () => {
//       const data = useContext(chup)
//   return (
//     <div>
//     <h1>{data.name}</h1>
    
//     </div>
//   )
// }

// export default Header
// // import React from 'react'
// // import { createContext } from 'react';
// // import CardSect from './components/CardSect'
// // const data={
// //   name:'deepak'
// // };

// //  export const chup= createContext()
// // const App = () => {

   
// //   return (
// //     <div>
// //     <chup.Provider value={data}>
// //     <CardSect />
// //     </chup.Provider>
// //     </div>
// //   )
// // }

// // export default App
// import React,{useReducer} from 'react'

// let  initialState={
//   startCount:0,
//   secondStart:1
// }
// const reducer=(state,action)=>{
// switch(action.type){
// case "increase" :
//   return {...state,startCount:state.startCount+action.value};
  
// case "decrease" :
//   return  {...state,startCount:state.startCount-action.value};
// case "secondincrease" :
//   return {...state,secondStart:state.secondStart+action.value};
  
// case "seconddecrease" :
//   return  {...state,secondStart:state.secondStart-action.value};
// case "reset" :
//   return initialState;

//   default:
//     return state;

// }
// }

// const App = () => {

//   const [state, dispatch] = useReducer(reducer, initialState)
//   return (
//     <div className='align-items-center justify-content-center d-flex flex-column  '>
//     <h1>{state.startCount}</h1>
//     <h1>{state.secondStart}</h1>
//       <button onClick={()=>dispatch({type:'increase',value:1})}>increase</button><br></br>
//       <button onClick={()=>dispatch({type:'decrease' ,value:4})}>decrease</button><br></br>
//       <button onClick={()=>dispatch({type:'secondincrease',value:11})}>secondincrease</button><br></br>
//       <button onClick={()=>dispatch({type:'seconddecrease' ,value:41})}>seconddecrease</button><br></br>
//       <button onClick={()=>dispatch({type:'reset'})}>reset</button>
//     </div>
//   )
// }

// export default App