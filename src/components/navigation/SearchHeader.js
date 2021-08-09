import React from 'react'
import { Container, Grid } from "@material-ui/core";
import SearchForm from "./searchform/SearchForm";
import { makeStyles } from "@material-ui/core/styles";
// import Image from "../assets/image101.jpg"

const imageUrl = "https://i.imgur.com/CFcRgel.jpg";

console.log(imageUrl);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: "45px",
  },
  searchHeader: {
  marginTop: "3rem",
  marginLeft: "-12px",
},
searchHead: {
  height: "95vh",
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
}
}));

const SearchHeader = () => {
    const classes = useStyles();

    return (
      <Container className={classes.searchHead} >
        <div>
            <Grid  className={classes.root}>
            <div className={classes.searchHeader}>
              <ul className="search__header__items">
                <li className="search__header__list">
                  <a href="/flight">Flight</a>
                </li>
                <li className="search__header__list">
                  <a href="/hotel">Hotel</a>
                </li>
                <li className="search__header__list">
                  <a href="/travel">Travel</a>
                </li>
              </ul>
            </div>
        </Grid>
          <SearchForm />
        </div>
      </Container>
    );
}

export default SearchHeader
