import {FETCH_CONTRACT,ADD_CONTRACT,FETCH_ITEM,UPDATE_ITEM,DELETE_ITEM} from '../actions/types';
export default function contracts(state=[],action={}){
    switch(action.type){
        case FETCH_CONTRACT:
             return action.contracts;
        case ADD_CONTRACT:
             return[ ...state,action.contracts];
        case DELETE_ITEM:
            return state.filter((items)=>items._id !== action.contracts);
        case UPDATE_ITEM:
            return state.map((item)=>{
                if(item._id===action.contracts._id){
                    return action.contracts;
                }
                return item;
            })
        case FETCH_ITEM:
             const index=state.findIndex((item)=>item._id===action.contracts._id);
             if(index>-1){
                 return state.map((item)=>{
                  if(item._id===action.contracts._id){
                      return action.contracts;
                  }
                  return item;
                 } );
             }else{
                 return[...state,action.contracts]
             }
        default:
             return state;
    }
}