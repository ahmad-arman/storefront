import { createStore, combineReducers ,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'


// This dependency enables the Redux Dev Tools in your chrome browser
import { composeWithDevTools } from 'redux-devtools-extension';

// import counter from './votes';
import reducer from './categories';
import reducer2 from './simpleCart';
import details from './details';
// let ahmad = require('./simpleCart').reducer


// Combine reducers isn't really necessary when you only have one reducer.
// But 99.99% of all Redux apps will have more than one reducer to 'combine'
// and we need to use combineReducers, since Redux only work with one root-reducer
let reducers = combineReducers({ category: reducer ,cart: reducer2 ,detail: details});

// console.log(reducers,'reducers')


const store = () => {
    return createStore(reducers,composeWithDevTools(applyMiddleware(thunk)) );
}


export default store();