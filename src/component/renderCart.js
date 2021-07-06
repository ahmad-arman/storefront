import React from 'react';
import Button from "@material-ui/core/Button";
import { connect } from 'react-redux';
import {cart1,remove} from '../store/simpleCart'
import './renderCart.scss'
import { Link } from 'react-router-dom';
import { details } from '../store/details';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const Cart = props =>{
    console.log(props.cart,'::::::::::::')

    // const deleteHandel= (id)=>{
    //   let item = props.cart? props.cart.data.map(val=> val._id ===id) :null
    //   console.log(item,'item')

    // }

    
    return (
        // <h1>cart({props.cart.data ?props.cart.data.length :0})</h1> 
        
        <>
        <div id="cartcon">
      {/* <Button component = {Link} to ='/cart'    id='cart' >Cart ({ props.cart? props.cart.data.length : 0})</Button> */}
        <ul className="id">
        { props.cart? props.cart.data.map(val =>
     
            <>
            <div id="list">
           
            <Button  component={Link}
                                    to={`/product/${val._id}`}
                                    onClick={() => {
                                      props.details(val);
                                      console.log(val, "val2");
                                    }}>  <li key={val._id}> {val.name} 
                                     </li>
                                      </Button> 
                                    
            <Button onClick={ ()=>{props.remove(val)}} > X </Button>
            <Button onClick={ ()=>{props.cart1(val)}}> + </Button>

           
         
           
            </div>
            </>


      
           
            ):null}
            </ul>
        </div>
        
        </>
    )
}

const mapStateToProps = state =>({
    cart :state.cart ? state.cart : null,
   
})

const mapDispatchToProps = {cart1, remove ,details};

export default connect(mapStateToProps,mapDispatchToProps)(Cart)