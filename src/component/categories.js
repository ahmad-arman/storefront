import React from 'react';
import { connect } from 'react-redux'
import {food,electronics} from '../store/categories'
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";






const Category = (props) =>{
    // console.log(props,'##########3')
    return (
        <>
  

        <Button type="button" onClick={ ()=>{props.food('food') 
        
        ; return false
        
        }}> food    </Button>
       
        <Button type="button" onClick={()=>{props.electronics('electronics')}}>electronics </Button>
      
      
    
       
        </>
    )
}

const mapStateToProps = state => ({
    category: state.category
})

const mapDispatchToProps ={food ,electronics} 

export default connect(mapStateToProps,mapDispatchToProps)(Category)

