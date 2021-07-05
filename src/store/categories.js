import superagent from "superagent";
// let api = 'https://api-js401.herokuapp.com/api/v1/products';
// let data;
// superagent.get(api)
// .then(result => {
    
//     data =result.body.results
//     console.log(data,'aaaaaaaaaaaaaaaaaaaaa')
// });

// let initialState =data

// eslint-disable-next-line import/no-anonymous-default-export
export default async (state = [], action) => {
    let { type,payload} = await action;
//     console.log(action)
//    await superagent.get('https://api-js401.herokuapp.com/api/v1/products')

    // .then(result => {
        
    //  let   data =payload.body.results
       

   

     switch (type ) {
        case 'food':
        
           let data1=  payload.filter((value) => value.category=== 'food')
             console.log(data1,'wwwwwwwwwwwwwwwww')
            return {...state,payload:data1 }
           

         
        case 'electronics':
       
            let data2 = payload.filter((value) => value.category=== 'electronics')
            console.log(data2,'sssssssssss')
            return {...state,payload:data2 }
        default:
            return null;
    }

//    });

    // if (type === 'INCREMENT') {
    //     //THEN DO SOME STUFF
    // } else if (type === 'RESET') {
    //     return initialState;
    // } else {
    //     return state;
    // }

    //we need to return a new state
}

export const food = async (dispatch) => {

    await superagent.get('https://api-js401.herokuapp.com/api/v1/products').then((data1) => {
     let ahmad = data1.body.results
     console.log(ahmad,'kkkkkkkkkkkkkkk');
    return dispatch ({
        type: 'food',
        payload:ahmad
     
        
    })
   })
};

export const electronics = (type) => {
    return {
        type:type
    }
};

