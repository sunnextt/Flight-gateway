import React from 'react'
import { Grid } from '@material-ui/core'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { makeStyles } from '@material-ui/core/styles';
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import content from "../../data/HolidayData";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

const HolidayDestinations = () => {

    const classes = useStyles();

  return (
    <div className="holidays_deal">
      <Grid>
        <Grid>
          <Splide
            options={{
              rewind: true,
              cover: true,
              width: "100%",
              height: 300,
              gap: "1rem",
              perPage: "4",
              perMove: "2",
              padding: 10,
              easing: "ease",
              lazyLoad: "nearby",
              breakpoints: {
                640: {
                  perPage: 1,
                  gap: "1rem",
                },
                480: {
                  perPage: 1,
                  gap: "1rem",
                },
              },
            }}
          >
            {content.map((item, index) => (
                <SplideSlide key={index}>
                  <a href="/image/index">
                  <img src={item.image} alt="Img 1" />
                  </a>
              </SplideSlide>
            ))}
          </Splide>
        </Grid>
      </Grid>
    </div>
  );
};

export default HolidayDestinations
