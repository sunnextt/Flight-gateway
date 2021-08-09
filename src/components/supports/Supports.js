import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";


const imageUrl = "https://i.imgur.com/WQdaknM.jpg"


const useStyles = makeStyles((theme) => ({
container: {
    height: "90vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundImage: `url(${imageUrl})`,
    [theme.breakpoints.down('xs')]: {
    height: "100%",
    },
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    backgroundColor: "#3f383d",
    textDecoration: "none",                                                                                                                                                   
},
supportDiv: {
     display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
},
supporth1: {
    color:"#fff",
    fontWeight: 800,
    letterSpacing: "o.o6rem",
    textTransform: "uppercase",
    // fontsize: "50px",
    lineHeight: 1.17,

},
supporth6: {
    color:"#fff",
    letterSpacing: "o.o6rem",
    fontsize: "20px",
    lineHeight: "28px",
    margin: "3rem auto",
},
button: {
    display: "inline-block",
    verticalAlign: "middle",
    textTransform: "uppercase",
    letterSpacing: "o.oemem",
    fontsize: "20px",
    lineHeight: "1.5",
    fontWeight: 900,
    borderRadius: 0,
    boxShadow: "0 2px 10px 0 rgb(0 0 0 / 23%)",
    border: "none",
    padding: "20px 45px",
    cursor: "pointer",
    backgroundColor: "#c62a82",
    background: "linear-gradient(0deg, #ad146a 0%, #c62a82 100%)",
}
}));

export const Support = () => {

    const classes = useStyles();

    return (
            <Grid container  className={classes.container}> 
            <Grid item xs={12}  >
               <Grid container className={classes.supportDiv}>
                <Grid item xs={11}>
                    <Typography variant="h2" className={classes.supporth1} >
                        24/7 SUPPORT
                    </Typography>
                </Grid>
                <Grid item xs={11} sm={6} md={5}>
                    <Typography variant="h6" className={classes.supporth6} >
                        Our Support Service is available 24 hours a day, 7 days a week to help you buy your tickets.
                    </Typography>
                </Grid>
                <Grid item xs={11} >
                <Button variant="contained" color="secondary" className={classes.button}>
                    get in tourch
                </Button>
                </Grid>
               </Grid>
            </Grid>
            </Grid>
    )
}
