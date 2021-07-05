import React from 'react';
import { connect } from 'react-redux'
import {food,electronics} from '../store/categories'

const Category = (props) =>{
    return (
        <>
        <button type="button" onClick={ ()=>{props.food('food')}}> food </button>
        <button type="button" onClick={()=>{props.electronics('electronics')}}>electronics </button>
        </>
    )
}

const mapStateToProps = state => ({
    category: state.category
})

const mapDispatchToProps ={food ,electronics} 

export default connect(mapStateToProps,mapDispatchToProps)(Category)

