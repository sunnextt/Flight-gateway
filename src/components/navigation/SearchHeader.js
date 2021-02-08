import React from 'react'
import { Container, Grid } from "@material-ui/core";

import SearchForm from "./searchform/SearchForm";

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  headerWrapper: {
    marginLeft: theme.spacing(13),
    marginRight: theme.spacing(13),
  },
}));

const SearchHeader = () => {
    const classes = useStyles();

    return (
      <Container item xs={12}>
        <Grid maxWidth="lg">
          <div className={classes.headerWrapper}>
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
          </div>
        </Grid>
        <SearchForm />
      </Container>
    );
}

export default SearchHeader
