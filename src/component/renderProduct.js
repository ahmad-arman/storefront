import React from 'react';

import {connect} from 'react-redux'

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
// import Grid from '@material-ui/core/Grid';
import './cards.scss'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(4),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    //   background :''
    },
  }));
 
  
const Product =  props => {
 console.log(props.category)
   
 const classes2 = useStyles();


        return (
           
            <>
             <main>

          <div id="card"> 
              
              <div>
            
        
          
         


        {props.category.type? (

        <section>
            {console.log(props.category.type)}
            <h1 id="category"> {props.category.type}</h1>
            <h4>Category Description Goes Here</h4>
        </section>
                    ) : null}

     
          <div className={classes2.root}>
          <Grid container spacing={3}>
      {
         
      props.category.data
             ?   props.category.data.map((val) => (
                <Grid item xs={3}>
                <Paper className={classes2.paper}>

                <div key={val._id} id="card">
                
                <CardMedia>
                <CardActions>
               <CardContent>
           
              <img src={ `https://source.unsplash.com/random?${val.name}&quot` }alt={val.name}/>

              {/* <img src={val.img} alt={val.name} /> */}
              <h2>{val.name}</h2>
           
              <Button size="small" color="primary">
                Add To Cart
               </Button>

               <Button size="small" color="primary">
               View Detail
               </Button>
              
               </CardContent>
               </CardActions>
               </CardMedia>
              
            </div>
                </Paper>
                </Grid>
            
          ))
        : null}
         </Grid>
        </div>
         </div> 
    
          </div>
            

          </main>
            </>
         
        )

        
  

   

}

const mapStateToProps = state =>({
   
    category : state.category ? state.category :null
} )

export default connect(mapStateToProps)(Product)
