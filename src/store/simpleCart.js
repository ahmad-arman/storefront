// import superagent from 'superagent';

// console.log('مشان الله يا ابن الناس')

// let initialState = {
  
//     data:[],
// }
// console.log(initialState,'initialState');



// export default function reducer  (state= initialState , action) {
//     console.log(action,'action')
//      let {type,payload} =  action;
//     console.log(state,'################################')
//     // console.log(type,'type')
//     // console.log(payload,'$$$$$');

//     switch (type ) {

//         case 'remove':
//             console.log(state,'inside remove')
//             // let item = state.data?state.data.filter(val =>val._id !== payload._id ):null
//             console.log(payload,'+-----+++++++++---+--')
//             // let data = payload

//             let myId = state.data.indexOf(payload)
        
           
//          let ahmad=   state.data
//          ahmad.splice(myId, 1);
//           console.log(state,'state')
            
//             return {data:ahmad}

//         case 'add':
//            console.log('inside add')
//         //    initialState.data =[...state.data ,payload]
//             return {data :[...state.data ,payload] }
           

     
           
      
//         default:
//             return state;
//     }
// }


// export const cart1 = (payload) =>  (dispatch,state) =>{

 
//     payload.inStock = payload.inStock -1 
  
//    return superagent.put(`https://api-js401.herokuapp.com/api/v1/products/${payload._id}`).send(payload)
//    .then(res => {
//        dispatch({
           
//         type: 'add',
//         payload:payload

//        })
//    })


// };

// export const remove = (payload) =>(dispatch,state) => {
//     //  console.log(data,'&&&&&&');

//     payload.inStock =payload.inStock +1
     
//        return superagent.put(`https://api-js401.herokuapp.com/api/v1/products/${payload._id}`).send(payload)
//        .then(res => {
//            dispatch({
               
//             type: 'remove',
//             payload:payload
    
//            })
//        })
 
    

//     };

import superagent from 'superagent';
import { createSlice } from "@reduxjs/toolkit";



/**************************************** */

const products = createSlice({
    name: 'add',
    initialState: { data:[] },
      
    reducers: {
      addProduct(state, action) {
       
     
      //   console.log(action.payload,'action.payload');
        state ={data:[...state.data ,action.payload]}
        return state 
           
      
      },
      removeProduct(state, action) {
      
        console.log(state,'inside remove')
                  
                   
                 
        
                 let myId = state.data.indexOf(action.payload)
                
                   
                //  let ahmad=  state.data
                 state.data.splice(myId, 1);
                  console.log(state,'state')
                    
                    return state
   
      },
    }
  });
 


   export const cart1 = (payload) =>  (dispatch,state) =>{

 let body = {
    inStock : payload.inStock -1 ,
 }
       
      
       return superagent.put(`https://api-js401.herokuapp.com/api/v1/products/${payload._id}`).send(body)
       .then(res => {
        dispatch(addProduct(res.body));
       })
    };

    export const remove = (payload) =>(dispatch,state) => {
            //  console.log(data,'&&&&&&');

            let body = {
                inStock : payload.inStock +1 ,
             }
        
            // payload.inStock =payload.inStock +1
             
               return superagent.put(`https://api-js401.herokuapp.com/api/v1/products/${payload._id}`).send(body)
               .then(res => {
                  dispatch(removeProduct(res.body));
               })
            
    };
  // export reducer
  export default products.reducer;
  // export actions
  export const { addProduct, removeProduct } = products.actions;
