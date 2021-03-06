import React from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
// import Grid from '@material-ui/core/Grid';
// import {food,electronics} from '../store/categories'
import { cart1, remove } from "../store/simpleCart";
import { details } from '../store/details';
import "./cards.scss";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// let cart = require("../store/simpleCart").cart;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
    //   background :''
  },
}));

const Product = (props) => {
  const classes2 = useStyles();
  console.log(
    
    props.details,
    "ahmadahmad"
  );
  return (
    <>
      <main>
        <div id="card">
          <div>
            {props.category ? (
              <section>
                {/* {console.log(props.category.type)} */}
                <h1 id="category"> {props.category.type}</h1>
                <h4>Category Description Goes Here</h4>
              </section>
            ) : null}

            <div className={classes2.root}>
              <Grid container spacing={3}>
                {console.log(props,'amjadamjadamjad')}
                {props.data.data
                  ? props.data.data.map((val) => (
                      <Grid item xs={3}>
                        <Paper className={classes2.paper}>
                          <div key={val._id} id="card">
                            <CardMedia>
                              <CardActions>
                                <CardContent>
                                  <img
                                    src={`https://source.unsplash.com/random?${val.name}&quot`}
                                    alt={val.name}
                                  />

                                  {/* <img src={val.img} alt={val.name} /> */}
                                  <h2>{val.name}</h2>

                                  <Button
                                    size="small"
                                    color="primary"
                                    onClick={() => {
                                      props.cart1(val);

                                      console.log(val, "val");
                                    }}
                                  >
                                    Add To Cart
                                  </Button>

                                  <Button
                                    size="small"
                                    color="primary"
                                    component={Link}
                                    to={`/product/${val._id}`}
                                    onClick={() => {
                                      props.details(val);
                                      console.log(val, "val2");
                                    }}
                                  >
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
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart ? state.cart : null,
  data: state.category ? state.category : null,
});

const mapDispatchToProps = { cart1, remove, details };

export default connect(mapStateToProps, mapDispatchToProps)(Product);
