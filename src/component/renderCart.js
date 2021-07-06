import React from 'react';
import Button from "@material-ui/core/Button";
import { connect } from 'react-redux';
import {cart1,remove} from '../store/simpleCart'
import './renderCart.scss'


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
        <h4 id='cart'>Cart ({ props.cart? props.cart.data.length : 0})</h4>
        <ul className="id">
        { props.cart? props.cart.data.map(val =>
     
            <>
            <div id="list">
            <li key={val._id}>{val.name} 
            <Button onClick={ ()=>{props.remove(val)}} > X </Button>
            <Button onClick={ ()=>{props.cart1(val)}}> + </Button>
            </li>
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

const mapDispatchToProps = {cart1, remove };

export default connect(mapStateToProps,mapDispatchToProps)(Cart)