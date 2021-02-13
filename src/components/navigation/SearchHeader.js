import React from 'react'
import { Container, Grid } from "@material-ui/core";
import SearchForm from "./searchform/SearchForm";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: "45px"
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}));

const SearchHeader = () => {
    const classes = useStyles();

    return (
      <Container className="search_head" >
        <Grid container className={classes.root}>
            <div className="search__header">
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
      </Container>
    );
}

export default SearchHeader
