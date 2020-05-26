import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// Tan: #C3B78E
// Dark Olive Green: #6C603B
// Dark Slate Gray: #111212
// Dim Gray: #413F3B
// Dark Slate Blue: #293E4B
// Peru: #CBAA34


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '8%',
    flexGrow: 1,
    backgroundImage: 'linear-gradient(to bottom left, #111212 15%, #293E4B, #CBAA34)'
    
  },
  grid: {
    margin: '10% auto',
    width: '95%'
    
  },
  paper: {
    padding: '25%',
    textAlign: 'center',
    borderRadius: '65px 25px',
    boxShadow: '-2px 2px 8px white',
    '@media(max-width: 599px)': {
      padding: '10%'
    }
  },
  title: {
    padding: '20%',
    textAlign: 'center',
    borderRadius: '70px 10px',
    boxShadow: '-2px 2px 8px white',
    '@media(max-width: 599px)': {
      padding: '10%'
    }
  },
  paperSmall: {
    padding: '40%',
    borderRadius: '15px 65px',
    boxShadow: '-2px 2px 8px white',
    '@media(max-width: 599px)': {
      padding: '10%'
    }
  },
  paperLarge: {
    padding: '15%',
    textAlign: 'center',
    borderRadius: '65px 25px',
    boxShadow: '-2px 2px 8px white',
    '@media(max-width: 599px)': {
      padding: '10%'
    }
  },
}));

export default function Projects() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
      <div className={classes.grid}>
        <Grid container spacing={4} alignItems='center' justify='space-evenly'>
          <Grid item xs={12} sm={8} >
            <Paper className={classes.title}>Projects</Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paperSmall}>Tetris Game</Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paperSmall}>Reducer Todo</Paper>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Paper className={classes.paperLarge}>Chat Application</Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>APOTD</Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>Node Backend Project</Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>7</Paper>
          </Grid>
        </Grid>
    </div>
    </div>
    )
}

 

    // <div className={classes.root}>
    //     <Grid container spacing={1} alignContent='center'>
    //     <Grid item xs={12} sm={6}>
    //         <Paper className={classes.paper}>4</Paper>
    //       </Grid>
          
    //       <Grid item xs={12} sm={4}>
    //         <Paper className={classes.paper}>6</Paper>
    //       </Grid>
    //       <Grid item xs={12} sm={4}>
    //         <Paper className={classes.paper}>4</Paper>
    //       </Grid>
    //       <Grid item xs={12} sm={4}>
    //         <Paper className={classes.paper}>5</Paper>
    //       </Grid>
    //       <Grid item xs={12} sm={4}>
    //         <Paper className={classes.paper}>6</Paper>
    //       </Grid>
    //       <Grid item xs={12} sm={4}>
    //         <Paper className={classes.paper}>4</Paper>
    //       </Grid>
    //       <Grid item xs={12} sm={4}>
    //         <Paper className={classes.paper}>5</Paper>
    //       </Grid>
    //       <Grid item xs={12} sm={4}>
    //         <Paper className={classes.paper}>6</Paper>
    //       </Grid>
    //     </Grid>
    // </div>