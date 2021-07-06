let initialState = {}



// eslint-disable-next-line import/no-anonymous-default-export
export default  (state = initialState, action) => {

    let { type,payload} =  action;

    switch (type ) {
        
        case 'detail' :
            return {payload}

         
         default :
         return state;   

    }

}


export const details =(payload)=>{
 
    return {
        type:'detail',
        payload :payload
    }
       
    

}