import superagent from "superagent";
import { createSlice } from "@reduxjs/toolkit";

// eslint-disable-next-line import/no-anonymous-default-export
// export default (state = null, action) => {
//     let { type,payload} =  action;

//      switch (type ) {
//         case 'food':
          
//            let data1=  payload ? payload.filter((value) => value.category=== 'food' ):null
//              console.log(data1,'food')
//             return { type : 'FOOD',data: data1}
           

         
//         case 'electronics':
         
//             let data2 =  payload ? payload.filter((value) => value.category=== 'electronics'):null
//             console.log(data2,'electronics')
//             return {type :'ELECTRONICS' ,data:data2 }
//         default:
//             return state;
//     }


// }

// export const food = (type) => (dispatch,state) =>
// {

//     return superagent.get('https://api-js401.herokuapp.com/api/v1/products')
//     .then((res) => {
//    dispatch({
//     type: type,
//     payload:res.body.results

//    })
  
//    })
// };

// export const electronics = (type) =>  (dispatch,state) => {
//     return superagent.get('https://api-js401.herokuapp.com/api/v1/products')
//     .then((res) => {
//    dispatch({
//     type: type,
//     payload:res.body.results

//    })

//    })
// };

/**************************************** */

const categories = createSlice({
    name: 'categories',
    initialState: [],
    reducers: {
      electronicsCategory(state, action) {
        // let categoryArray = [];
     

       let data2 =  action.payload ? action.payload.filter((value) => value.category=== 'electronics'):null
       console.log(data2,'electronics')
       return {type :'ELECTRONICS' ,data:data2 }
      
      },
      foodCategory(state, action) {
        // let categoryArray = [];
        let data1= action.payload ? action.payload.filter((value) => value.category=== 'food' ):null
        console.log(data1,'food')
       return { type : 'FOOD',data: data1}
      
   
      },
    }
  });
 
  export const electronics = (type) => (dispatch, state) => {
    return superagent.get('https://api-js401.herokuapp.com/api/v1/products')
    .then((res) => {
   
        dispatch(electronicsCategory(res.body.results));
   });

   };

 
  export const food = (type) => (dispatch, state) => {
    return superagent.get('https://api-js401.herokuapp.com/api/v1/products')
    .then((res) => {
 
        dispatch(foodCategory(res.body.results));
   })
  };
  // export reducer
  export default categories.reducer;
  // export actions
  export const { electronicsCategory, foodCategory } = categories.actions;

