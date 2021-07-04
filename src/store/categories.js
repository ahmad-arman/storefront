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
export default async (state = 0, action) => {
    let { type} = action;
    console.log(action)
    await superagent.get('https://api-js401.herokuapp.com/api/v1/products')

    .then(result => {
        
     let   data =result.body.results
       

   

     switch (type) {
        case 'food':
        
           let data1=  data.filter((value) => value.category=== 'food')
             console.log(data1,'wwwwwwwwwwwwwwwww')
            return {  data: data1 }
           

         
        case 'electronics':
       
            let data2 = data.filter((value) => value.category=== 'electronics')
            console.log(data2,'sssssssssss')
            return {  data: data2 }
        default:
            return null;
    }

   });

    // if (type === 'INCREMENT') {
    //     //THEN DO SOME STUFF
    // } else if (type === 'RESET') {
    //     return initialState;
    // } else {
    //     return state;
    // }

    //we need to return a new state
}

export const food = (type) => {
    return {
        type: type,
       
        
    }
};

export const electronics = (type) => {
    return {
        type:type
    }
};

