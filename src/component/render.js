import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { cart1, remove } from "../store/simpleCart";

import { When } from "react-if";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";

// import SimpleCart from '../cart/simple-cart';

const UseStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  productName: {
    textTransform: "uppercase",
  },
  layout: {
    boxSizing: "border-box",
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  data: {
    padding: theme.spacing(3),
  },
  related: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  relatedItem: {
    padding: theme.spacing(2),
  },
  price: {
    textAlign: "right",
    color: theme.secondary,
  },
  buyButton: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    width: "100%",
  },
  more: {
    width: "100%",
  },
  image: {
    maxWidth: "100%",
  },
}));

function Render(props) {
  console.log(props.detail, "props.detail");

  const classes = UseStyles();

  let ahmad = props.detail;
  console.log(ahmad, "props.detail.payload");
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          className={classes.productName}
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {ahmad ? ahmad.name : null}
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          {ahmad ? ahmad.description : null}
        </Typography>

        <div className={classes.layout}>
          <Paper>
            <Grid container className={classes.data}>
              <Grid item xs={12}>
                <img
                  alt={ahmad ? ahmad.name : null}
                  className={classes.image}
                  src={`https://source.unsplash.com/random?${ahmad.name}`}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5" color="textSecondary" paragraph>
                  In Stock: <strong>{ahmad ? ahmad.inStock : null}</strong>
                </Typography>
              </Grid>
              <Grid item xs={6} className={classes.price}>
                <Typography variant="h5" paragraph>
                  ${ahmad ? ahmad.price : null}
                </Typography>
              </Grid>
            </Grid>
          </Paper>

          <When condition={ahmad ? ahmad.inStock >= 1 : null}>
            <Button
              className={classes.buyButton}
              variant="contained"
              color="primary"
              onClick={() => {
                props.cart1(ahmad);
              }}
            >
              Buy
            </Button>
          </When>

          {/* <Grid container className={classes.related}>
  
              <Grid item xs={12}>
                <Typography variant="h4" gutterBottom={true}>Related Items</Typography>
              </Grid>
  
              <Grid item xs={4}>
                <Paper className={classes.relatedItem}>Suggestion 1</Paper>
              </Grid>
  
              <Grid item xs={4}>
                <Paper className={classes.relatedItem}>Suggestion 2</Paper>
              </Grid>
  
              <Grid item xs={4}>
                <Paper className={classes.relatedItem}>Suggestion 3</Paper>
              </Grid>
  
            </Grid> */}

          {/* <Typography variant="h4" gutterBottom={true}>Product Details</Typography> */}
          {/* <ExpansionPanel className={classes.more} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography className={classes.heading}>Specifications</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Products Specs.
            </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
   */}

          {/* <ExpansionPanel className={classes.more} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography className={classes.heading}>User Reviews</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  A list of reviews ...
              </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel> */}
        </div>
      </Container>
    </div>

    // <div>

    //     <h1> {ahmad.name} </h1>
    //     <img src={`https://source.unsplash.com/random?${ ahmad.name }&quot`}  alt={ahmad.name }  />
    //     <h5>In Stock: { ahmad.inStock } </h5>
    //     <span> $ {ahmad.price }</span>
    //     <Button onClick={ ()=>{props.cart1(ahmad)}}> Buy </Button>
    // </div>
  );
}

const mapStateToProps = (state) => ({
  detail: state.detail ? state.detail : null,
});
const mapDispatchToProps = { cart1, remove };

export default connect(mapStateToProps, mapDispatchToProps)(Render);
