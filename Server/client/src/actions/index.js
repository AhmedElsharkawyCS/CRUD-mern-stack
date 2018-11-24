import Axios from 'axios';
import { FETCH_CONTRACT,ADD_CONTRACT,UPDATE_ITEM,FETCH_ITEM ,DELETE_ITEM} from './types';
//
//update item by id
export const UpdateItem=function(vlaues){
    return function(dispatch){
    Axios.post(`/api/contractUpdate/${vlaues._id}`,vlaues,{ headers: {'Access-Control-Allow-Origin': '*','Content-Type': 'application/json'}
   })
    .then((contracts) => {
                // console.log(user);
                dispatch({
                     type:UPDATE_ITEM,
                     contracts:contracts.data 
                 });
             }).catch((err) => {
                 console.log(err);
             });
  }
}

//get item by id
export const fetchItem=  function(id){
    return function(dispatch){
     Axios
     .get(`/api/contracts/${id}`,{ headers: {'Access-Control-Allow-Origin': '*','Content-Type': 'application/json'}
    })
     .then((contracts) => {
        dispatch({
             type:FETCH_ITEM,
             contracts:contracts.data
         });
     }).catch((err) => {
         console.log(err);
     });
   
     }
}
//crate new contract
export const saveContract=function(vlaues){
    return function(dispatch){
    Axios.post("/api/contracts/new",vlaues)
    .then((contracts) => {
                // console.log(user);
                dispatch({
                     type:ADD_CONTRACT,
                     contracts:contracts.data 
                 });
             }).catch((err) => {
                 console.log(err);
             });
  }
}
//gaet all contarcts
export const fetchContracts=  function(){
    return function(dispatch){
     Axios
     .get('/api/contracts',{ headers: {'Access-Control-Allow-Origin': '*','Content-Type': 'application/json'}
    })
     .then((contracts) => {
        dispatch({
             type:FETCH_CONTRACT,
             contracts:contracts.data
         });
     }).catch((err) => {
         console.log(err);
     });
   
     }
}
//deleteContract
export const deleteContract=  function(id){
    return function(dispatch){
     Axios
     .delete(`/api/contracts/${id}`,{ headers: {'Access-Control-Allow-Origin': '*','Content-Type': 'application/json'}
    })
     .then((contractID) => {
        dispatch({
             type:DELETE_ITEM,
             contracts:contractID.data._id
         });
     }).catch((err) => {
         console.log(err);
     });
   
     }
}

// export const handelToken=  function(token){
//     return function(dispatch){
//      Axios
//      .post('/api/stripe',token)
//      .then((user) => {
//          console.log(user);
//          dispatch({
//              type:FETCH_USER,
//              payload:user.data 
//          });
//      }).catch((err) => {
//          console.log(err);
//      });
   
//      }
// }
// function handelResp(response){
//     if(response.ok){
//         return response.json();
//       }else{
//           var error=new Error(response.statusText);
//           error.response=error;
//           throw error;
//       }
// }

// export const FetchSurvey=function(){
//     return function(dispatch){
//         Axios
//         .get('/api/surveys',{ headers: {'Access-Control-Allow-Origin': '*','Content-Type': 'application/json'}
//        })
//         .then((user) => {
//             dispatch({
//                 type:FETCH_SURVEY,
//                 payload:user.data 
//             });
//         }).catch((err) => {
//             console.log(err);
//         });
      
//         }   
// }