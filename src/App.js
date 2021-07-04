
import './App.scss';
import Category from './component/categories';
import Product from './component/renderProduct';

function App() {
  return (
    <>
  <h1> Browse our Categories </h1>
  <div>
    <Category />
    <Product /> 
    {/* <button type="button" id="food">FOOD </button>
    <button type="button" id="electronics" >ELECTRONICS </button> */}

  </div>
  </>
  );
}

export default App;
