
import './App.scss';
import Category from './component/categories';
import Product from './component/renderProduct';
import { Route, Switch } from 'react-router-dom';
import Header from './component/header';

import Render from './component/render'
import CartAll from './component/CartAll'

import { BrowserRouter as Router, HashRouter, MemoryRouter } from 'react-router-dom';


function App() {
 return (
    
    <>

  <div>
 
  <Router>
  <Header />

    <Switch>
             
             <Route exact path="/" > 
           
                  <Category />
                  
                  <Product />
                  
             </Route>
             <Route exact path="/product/:id" > <Render /></Route>
             <Route exact path="/cart"><CartAll/></Route>
    </Switch>

    </Router>



   
    {/* <button type="button" id="food">FOOD </button>
    <button type="button" id="electronics" >ELECTRONICS </button> */}

  </div>
  </>
  );
}

export default App;
