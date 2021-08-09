import React, {useRef} from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import { Button } from '@material-ui/core';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



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
        <Grid container >
        <Grid item xs={12} sm={12} md={12}className="recentblogs">
          <h5 style={style} >Recent Blog Posts</h5>
          <h2>Tips & Tricks</h2>
          <hr />
        </Grid>
        <Grid item xs={12} sm={6} md={6} className={classes.blogsItem} >
            <Grid container className={classes.recentArticleOne} >
                 <OwlCarousel className="owl-theme" loop margin={10} {...options}>
                    <div className={classes.carouselDiv}>
                    <Grid item xs={12} sm={6} md={6} className={classes.RecentsBlogs}>
                    <Grid container>
                        <Grid item xs={6} sm={6} md={6}>
                            <Button variant="contained" >
                                Article
                            </Button>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}>
                            <Typography variant="h6">
                                september 12, 2019
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={6} className={classes.RecentsBlogs}>
                    <Typography variant="h4" >
                        How to Make Travel Video
                    </Typography>
                    <Typography variant="h6" >
                        Travel blogging is a crowded field — and it gets more crowded day by day. And a lot of the advice that people give are actually counterintuitive to..
                    </Typography>
                    <a href="/blogs">Read More</a>
                </Grid>
                    </div>
                    <div className={classes.carouselDiv}>
                    <Grid item xs={12} sm={6} md={6} className={classes.RecentsBlogs}>
                    <Grid container>
                        <Grid item xs={6} sm={6} md={6}>
                            <Button variant="contained" >
                                Article
                            </Button>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}>
                            <Typography variant="h6">
                                september 12, 2019
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={6} className={classes.RecentsBlogs}>
                    <Typography variant="h4" >
                        How to Make Travel Video
                    </Typography>
                    <Typography variant="h6" >
                        Travel blogging is a crowded field — and it gets more crowded day by day. And a lot of the advice that people give are actually counterintuitive to..
                    </Typography>
                    <a href="/blogs">Read More</a>
                </Grid>
                    </div>
                    <div className={classes.carouselDiv}>
                    <Grid item xs={12} sm={6} md={6} className={classes.RecentsBlogs}>
                    <Grid container>
                        <Grid item xs={6} sm={6} md={6}>
                            <Button variant="contained" >
                                Article
                            </Button>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}>
                            <Typography variant="h6">
                                september 12, 2019
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={6} className={classes.RecentsBlogs}>
                    <Typography variant="h4" >
                        How to Make Travel Video
                    </Typography>
                    <Typography variant="h6" >
                        Travel blogging is a crowded field — and it gets more crowded day by day. And a lot of the advice that people give are actually counterintuitive to..
                    </Typography>
                    <a href="/blogs">Read More</a>
                </Grid>
                    </div>
                </OwlCarousel>               
                
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={6} className={classes.blogsItem} >
            <Grid container >
                <Grid item xs={12} sm={6} md={6} >
                    <Grid>
                        <Button variant="contained" >
                            Article
                        </Button>
                    </Grid>
                    <Grid>
                         <Typography variant="h6">
                            september 12, 2019
                        </Typography>
                    </Grid>
                    <Grid>
                         <Typography variant="h6" >
                         Travel blogging is a crowded field — and it gets more crowded 
                         day by day. And a lot of the advice that people give are actually
                         counterintuitive to..
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={6} >
                    <Grid>
                        <Button variant="contained" >
                            Article
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        
        </Grid>
    )
}
