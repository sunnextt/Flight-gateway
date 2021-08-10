import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const image = "https://i.imgur.com/4e41B0V.jpg"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    position: "relative",
    margin: "1rem"
  },
    button: {
    position: "absolute",
    top: 10,
    left: 20,
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
    padding: "10px 25px",
    cursor: "pointer",
    backgroundColor: "#c62a82",
    color: "white",
    background: "linear-gradient(0deg, #ad146a 0%, #c62a82 100%)",
},

btnReadMore: {
    textTransform: "uppercase",
    letterSpacing: "o.oemem",
    fontsize: "20px",
    lineHeight: "1.5",
    fontWeight: 700,
    color: "#42d4ec",
}
});

export const BlogCard = () => {
 const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={image}
          title="Contemplative Reptile"
        />
        <Button variant="contained" className={classes.button} >
        Article
        </Button>
        <CardContent>
            <Typography style={{color: '#3e3f40', fontsize: "10px", fontweight: "bold", padding: "2rem auto"}}>
                september 12, 2019
            </Typography>
          <Typography gutterBottom variant="h5" component="h2" style={{color: "#3e3f40;",fontWeight: 700}}>
            9 Ways to Become a Successful Travel Blogger
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color: "#3e3f40"}}>
            Travel blogging is a crowded field — and it gets more crowded 
            day by day. And a lot of the advice that people give are actually
            counterintuitive to..
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" className={classes.btnReadMore}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
