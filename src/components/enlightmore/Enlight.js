import React from 'react'
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import AirplanemodeActiveOutlinedIcon from "@material-ui/icons/AirplanemodeActiveOutlined";
import EventAvailableOutlinedIcon from "@material-ui/icons/EventAvailableOutlined";
import SupervisorAccountOutlinedIcon from "@material-ui/icons/SupervisorAccountOutlined";







const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(4),
  },
  icon: {
    fontSize: 100,
    color: "#ad146a",
    display: "block",
    padding: "1rem",
    margin: "auto",
    borderRadius: "50%",
    boxShadow: "2px 0 20px 0 rgba(100, 103, 121, 0.21)",
  },
  item: {
    padding: theme.spacing(10),
    "& h5": {
      fontSize: "20px",
      fontWeight: "700",
      margin: "20px",
      textAlign: "center",
    },
    "& p": {
      fontSize: "16px",
      fontWeight: "500",
      color: theme.palette.text.secondary,
      textAlign: "center",
    },
    "& hr": {
      marginBottom: "22px",
      width: "50px",
      backgroundColor: "#42d4ec",
      height: "2px",
      border: "none",
    },
  },
}));

const style = {
  marginBottom: "2PX"
}


const Enlight = () => {

  const classes = useStyles();

    return (
      <div>
        <Grid className="why_choose_us">
          <h5 style={style} >Why People Choose Us</h5>
          <h2>Our Advantages</h2>
          <hr />
        </Grid>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3} className={classes.item}>
              <span>
                <SearchIcon className={classes.icon} />
              </span>
              <h5>User-Friendly Search System</h5>
               <hr />
              <p>
                Convenient and fast search for airline tickets, hotels and cars.
              </p>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className={classes.item}>
              <span>
                <AirplanemodeActiveOutlinedIcon className={classes.icon} />
              </span>
              <h5>The Most Reliable Airlines</h5>
               <hr />
              <p>
                We cooperate only with the most reliable airlines who can boast
                the perfect reputation.
              </p>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className={classes.item}>
              <span>
                <SupervisorAccountOutlinedIcon className={classes.icon} />
              </span>
              <h5>More Than 7M Visitors Each Month</h5>
               <hr />
              <p>
                More than 7 million people use our services to find and book
                airline tickets.
              </p>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className={classes.item}>
              <span>
                <EventAvailableOutlinedIcon className={classes.icon} />{" "}
              </span>
              <h5>Fast and Reliable Ticket Booking</h5>
               <hr />
              <p>
                We provide reliable ticket booking system, which is also perfect
                for first-time travellers.
              </p>
            </Grid>
          </Grid>
        </div>
      </div>
    );
}

export default Enlight
