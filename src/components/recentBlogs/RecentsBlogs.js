import React, {useRef} from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import { Button } from '@material-ui/core';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { BlogCard } from './BlogCard';



const imageUrl = "https://i.imgur.com/hHMJcwb.jpg"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(4),
  },
  icon: {

  },
  recentArticleOne: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", 
    },
  carouselDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
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
    color: "white",
    background: "linear-gradient(0deg, #ad146a 0%, #c62a82 100%)",
},
RecentsBlogscont: {
    display: "flex",
    flexDirection: "column",
    margin: "auto"
},
carouselDiv2: {
    height: "100%",
    width: "75%",
    [theme.breakpoints.between('sm', 'md')]: {
    width: "50%",
    },
    padding: "23px 20px 120px",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    textAlign: "left"
},
btnReadMore: {
    textTransform: "uppercase",
    letterSpacing: "o.oemem",
    fontsize: "20px",
    lineHeight: "1.5",
    fontWeight: 700,
    color: "#42d4ec",
    padding: "1rem"
},
blogsItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto"
}
}));

const style = {
  marginBottom: "2PX"
}


export const RecentsBlogs = () => {
      const classes = useStyles();
      const buttonRef = useRef(null);
      console.log(buttonRef);
 
    
    const options = {
        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        navText: ['next','prev'],
    };

    return (
        <Grid container style={{padding: "1rem"}} >
        <Grid item xs={12} sm={10} md={12}className="recentblogs" style={{margin: "3rem auto  3rem"}}>
          <h5 style={style} >Recent Blog Posts</h5>
          <h2>Tips & Tricks</h2>
          <hr />
        </Grid>
        <Grid item xs={12} sm={10} md={6} className={classes.blogsItem} >
            <Grid container className={classes.recentArticleOne} style={{padding: "1rem"}}>
                 <OwlCarousel className="owl-theme" loop margin={10} {...options}>
                    <div className={classes.carouselDiv}>
                        <div className={classes.carouselDiv2}>
                            <Grid item className={classes.RecentsBlogs}>
                                <Grid container style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                                    <Grid item xs={6} sm={6} md={6} style={{padding: "1rem",}}>
                                        <Button variant="contained" className={classes.button} >
                                        Article
                                        </Button>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6}>
                                        <Typography variant="h6" style={{color: '#e4e4e4', fontsize: "16px", fontweight: "bold"}}>
                                            september 12, 2019
                                        </Typography>
                                    </Grid>
                                </Grid>
                        </Grid>
                        <Grid item className={classes.RecentsBlogscont}>
                            <Typography variant="h5" style={{color: "white", margin: "1rem", fontWeight: 700}}>
                                How to Make Travel Videos
                            </Typography>
                            <Typography variant="h6" style={{color: "#e4e4e4", margin: "1.1rem", fontSize: "1rem"}}>
                                Travel blogging is a crowded field and it gets more crowded day by day. And a lot of the advice that people give are actually counterintuitive to..
                            </Typography>
                            <Grid>
                                <a href="/blogs" className={classes.btnReadMore}>Read More</a>
                            </Grid>
                        </Grid>
                        </div>
                    </div>
                </OwlCarousel> 
          </Grid>
        </Grid>
        <Grid item xs={12} sm={10} md={6} className={classes.blogsItem} >
            <Grid container style={{justifyContent: 'center'}}>
                <Grid item xs={9} sm={6} md={6} >
                    <BlogCard />
                </Grid>
                <Grid item xs={9} sm={6} md={6} >
                    <BlogCard />
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    )
}
