const reducer=(state,action)=>{
switch (action.type){
      case  "PAGE_LOADING":
            return{
                  ...state,
                  isloading:true,
            }
      case "GET NEWS":
            return{
                  ...state,
                  isloading:false,
                  hits:action.payload.hits,
                  nbPages:action.payload.nbPages,
            }
            case "REMOVE_POST":
                  return{
                        ...state,
                        hits:state.hits.filter((cureELem)=>{
                              return cureELem.objectID !==action.payload;
                        })
                  }
                  case "SEARCH_POST":
                        return{
                              ...state,
                              query:action.payload,
                        }
                        case "PREV_PAGE":
                              let pageN=state.page-1
                              if(pageN<=0){
                                    pageN=0
                              }
                        return{
                              ...state,
                              page:pageN,
                              }
                        case "NEXT_PAGE":
                              let pageINCRE=state.page+1
                              if(pageINCRE>=state.nbPages){
                                    pageINCRE=0
                              }
                        return{
                              ...state,
                              page:pageINCRE,
                              }      
}
return state;
}
export default reducer;