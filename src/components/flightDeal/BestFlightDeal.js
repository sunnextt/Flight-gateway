import React from 'react'
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  contain: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyItems: "center",
    margin: theme.spacing(2),
  },
  items: {},
  div: {
    backgroundColor: "#eeeeee",
  },
}));


const BestFlightDeal = () => {
        const classes = useStyles();

    return (
      <div>
        <Grid className="best_offers">
          <Grid className="best_offers_headline">
            <h3>British Airways Offers</h3>
            <hr />
          </Grid>
          <div className={classes.contain}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3} className={classes.items}>
                <div className={classes.div}>
                  <a href="www.localhost.com/deal">
                    <div>
                      <h4>Dubal(DXB)</h4>
                      <h5>from $351pp</h5>
                      {/* <img src={} ait="" /> */}
                      <p>Fly from london</p>
                      <span>22 sep 2021 - 29 sep 2021</span>
                    </div>
                    <div className="book_now">
                      <a href="/book">Book Now</a>
                      <span>offer found 9 hours ago</span>
                    </div>
                  </a>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={3} className={classes.items}>
                <div className={classes.div}>
                  <a href="www.localhost.com/deal">
                    <div>
                      <h4>Dubal(DXB)</h4>
                      <h5>from $351pp</h5>
                      {/* <img src={} ait="" /> */}
                      <p>Fly from london</p>
                      <span>22 sep 2021 - 29 sep 2021</span>
                    </div>
                    <div className="book_now">
                      <a href="/book">Book Now</a>
                      <span>offer found 9 hours ago</span>
                    </div>
                  </a>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={3} className={classes.items}>
                <div className={classes.div}>
                  <a href="www.localhost.com/deal">
                    <div>
                      <h4>Dubal(DXB)</h4>
                      <h5>from $351pp</h5>
                      {/* <img src={} ait="" /> */}
                      <p>Fly from london</p>
                      <span>22 sep 2021 - 29 sep 2021</span>
                    </div>
                    <div className="book_now">
                      <a href="/book">Book Now</a>
                      <span>offer found 9 hours ago</span>
                    </div>
                  </a>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={3} className={classes.items}>
                <div className={classes.div}>
                  <a href="www.localhost.com/deal">
                    <div>
                      <h4>Dubal(DXB)</h4>
                      <h5>from $351pp</h5>
                      {/* <img src={} ait="" /> */}
                      <p>Fly from london</p>
                      <span>22 sep 2021 - 29 sep 2021</span>
                    </div>
                    <div className="book_now">
                      <a href="/book">Book Now</a>
                      <span>offer found 9 hours ago</span>
                    </div>
                  </a>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </div>
    );
}



export default BestFlightDeal





