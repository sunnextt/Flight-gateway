import React from 'react'
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";



const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    margin: theme.spacing(5),
  },
  item: {
    padding: theme.spacing(10),
    "& h5": {
        fontSize: "20px",
        fontWeight: "700",
    },
    "& p": {
        fontSize: "16px",
        fontWeight: "500",
        color: theme.palette.text.secondary,

    }

  },
}));




const Enlight = () => {

  const classes = useStyles();

    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3} className={classes.item}>
            <h5>The World's Travel Search Engine</h5>
            <p>
              You can use our search engine to find any flight you want and
              select a desired destination and price.
            </p>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.item}>
            <h5>Cheap and Beneficial Air Tickets</h5>
            <p>
              We provide affordable tickets to the flights of almost all
              existing airlines so you don’t need to look for them.
            </p>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.item}>
            <h5>Our Support Lines are Open 24/7</h5>
            <p>
              Our 24/7 support operators are always ready to help you select a
              proper flight according to your needs.
            </p>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.item}>
            <h5>Convenient Payment Method For You</h5>
            <p>
              We provide a variety of payment methods including cheque, cash,
              and credit cards.
            </p>
          </Grid>
        </Grid>
      </div>
    );
}

export default Enlight
