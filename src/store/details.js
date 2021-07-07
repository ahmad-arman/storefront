// import superagent from 'superagent';

// let initialState = {}




// // eslint-disable-next-line import/no-anonymous-default-export
// export default  (state = initialState, action) => {

//     let { type,payload} =  action;
//  console.log(payload,'89988888888888888888888888')
//     switch (type ) {
        
//         case 'detail' :
//             console.log(payload,'merak')
//             return {payload}

         
//          default :
//          return state;   

//     }

// }




// export const details =(payload)=>{
 

//     return {
//         type:'detail',
//         payload :payload
//     }
       
    

// }

import superagent from 'superagent';
import { createSlice } from "@reduxjs/toolkit";
let API = 'https://api-js401.herokuapp.com/api/v1/products'


const detailsR = createSlice({
    name: 'categories',
    initialState: {},
    reducers: {
      detailCard(state, action) {
     
        return action.payload

      
      },
      
    }
  });
 
 

 


  export const details =(payload)=>  (dispatch, state) =>{
 

        return superagent.get(`${API}/${payload._id}`)
        .then((res)=>{
          dispatch(detailCard(res.body))
        })
           
        ;
          
        
           
        
    
    }

  export default detailsR.reducer;
  // export actions
  export const { detailCard } = detailsR.actions;






// export const details = (payload) => (dispatch,state) => {
 
//     console.log(payload,'payload')
//     return superagent.get(`${API}/${payload._id}`)
//     .then((res) => {
          
//            dispatch({

//             type:'detail',
//             payload :res.body
//            })
//        });
//       };
    
       
    



// export const details = payload => (dispatch)=>{
//     return superagent.get(`${API}/${payload._id}`).then(res=>{
//         dispatch({
//             type: 'detail',
//             payload: res.body
//         })
// })
// }


// export const details = (payload) => (dispatch, state) => {
//     return superagent.get(`${API}/${payload._id}`)
//     .then((results) => {
//         dispatch({
//           type: 'detail',
//           payload: results.body
//         })
//       });
//       };