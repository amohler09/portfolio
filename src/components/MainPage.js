import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const Load = require('../images/loading.png')
const Star = require('../images/shootingStar.png')
const Telescope = require('../images/telescope.png')
const Moon = require('../images/moon.png')
const Stars = require('../images/star1.png')


const useStyles = makeStyles((theme) => ({
    name: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    boxShadow: '-5px 5px 20px rgba(203, 170, 52, 0.637)',
    color: 'rgba(255, 255, 255, 0.851)',
    position: 'sticky',
    textAlign: 'right',
    padding: '5%',
    width: '60%',
    top: '5%',
    left: '35%',
    '& h1': {
        marginTop: '3%',
        fontWeight: '400',
        fontFamily: "Playfair Display",
        textShadow: '-8px 8px 5px rgb(14, 9, 45)',
        fontSize: '3rem',
            '@media(max-width: 599px)': {
                fontSize: '2rem'
            },
    },   
    '& hr': {
        marginTop: '3.5%',
        height: '6px',
        lineHeight: '18px',
        borderRadius: '50px',
        '&:nth-child(2)': {
            width: '80%',
            backgroundImage: 'linear-gradient(to left, #CBAA34, #293E4B, #293E4B)',
            marginLeft: '20%',
            boxShadow: '-2px 2px 8px rgba(245, 245, 245, 0.39)'
        },
        '&:nth-child(3)': {
            width: '60%',
            backgroundImage: 'linear-gradient(to left, #CBAA34, #293E4B, #293E4B)',
            marginLeft: '40%',
            boxShadow: '-2px 2px 8px rgba(245, 245, 245, 0.39)'
        },
        '&:nth-child(4)': {
            width: '40%',
            backgroundImage: 'linear-gradient(to left, #CBAA34, #293E4B, #293E4B)',
            marginLeft: '60%',
            boxShadow: '-2px 2px 8px rgba(245, 245, 245, 0.39)'
        },
        '&:nth-child(5)': {
            width: '20%',
            backgroundImage: 'linear-gradient(to left, #CBAA34, #293E4B, #293E4B)',
            marginLeft: '80%',
            boxShadow: '-2px 2px 8px rgba(245, 245, 245, 0.39)'
        },
        '&:nth-child(6)': {
            marginLeft: '30%',
            width: '60%',
            backgroundImage: 'linear-gradient(to left, #293E4B 50%, #CBAA34)'
        },
        '&:nth-child(7)': {
            marginLeft: '60%',
            width: '20%',
            backgroundImage: 'linear-gradient(to left, #293E4B 50%, #CBAA34)',       
        },
    },
    },
    headline: {
        width: '50%',
        backgroundColor: 'rgba(41, 62, 75, 0.616)',
        textShadow: '-8px 8px 10px rgba(203, 170, 52, 0.637)',
        fontFamily: 'Lato',
        fontStyle: 'italic',
        textAlign: 'center',
        lineHeight: '40px',
        boxShadow: '-5px 5px 20px rgba(203, 170, 52, 0.637)',
        position: 'sticky',
        color: 'white',
        fontSize: '1.5rem',
        padding: '5%',
        bottom: '35%',
        left: '5%',
        '& img': {
            maxWidth: '25%',
            marginBottom: '-10%'
        },
        '@media(max-width: 599px)': {
            fontSize: '1rem',
            lineHeight: '20px',
        }},
    nav: {
        width: '25%',
        position: 'fixed',
        left: '75%',
        top: '45%',
        
        '@media(max-width: 500px)': {
            width: '35%',
            top: '35%'
        },
        '@media(min-width: 501px)': {
            width: '30%',
            top: '35%'
        },
        '@media(min-width: 601px)': {
            width: '25%',
            top: '45%'
        },
        '@media(min-width: 801px)': {
            width: '20%',
            top: '50%'
        },
        // '@media(max-width: 700px)': {
        //     width: '35%',
        //     top: '40%'
        // },
        // '@media(max-width: 1100px)': {
        //     width: '25%',
        //     top: '30%'
        // },
        
  },
    box: {
        width: '50%',
        boxShadow: '4px 4px 8px rgba(255, 255, 255, 0.537)',
        borderRadius: '5px 25px',
        backgroundColor: 'rgba(41, 62, 75, 0.616)',
        boxSizing: 'border-box',
        textAlign: 'center',
        fontFamily: 'Merriweather',
        overflow: 'hidden',
        margin: '5% auto'

        
    },    
    icon: {
        backgroundColor: 'rgba(203, 170, 52, 0.637)',
        margin: 'auto',
        width: '100%',
        padding: '15%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: '0.5s', 
        boxShadow: '-2px 2px 5px rgba(255, 255, 255, 0.537)',
        '& p': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            transform: 'translateX(100%)',
            transition: '0.5s',
            fontSize:' 1rem',
            color: '#CBAA34',
        },
        '&:hover': {
            transform: 'translateX(-150%)',
            cursor: 'crosshair',
            transition: '0.5s',
            
        },
        
    },
    about: {
        paddingLeft: '50%',
        paddingTop: '10%'
    },
    past: {
        paddingLeft: '50%',
        paddingTop: '10%'
    },
    resume: {
        paddingLeft: '50%',
        paddingTop: '30%'
    },
    footer: {
        
        backgroundColor: 'rgba(255, 255, 255, 0.158)',
        boxShadow: '0px -10px 15px rgba(255, 255, 255, 0.158)',
        borderRadius: 0,
        textAlign: 'center',
        width: '100%',
        padding: '2%',
        position: 'sticky',
        top: '95%'
    }
}));  

export default function MainPage(props) {
    const classes = useStyles();
    const [toggle, setToggle] = useState(false)
    
    const buttonClick = e => {
        e.preventDefault();
        setToggle(!toggle)
    }

    return (
        <div className='main'>
            <Paper className={classes.name}>
                <h1>Amber Mohler</h1>
                <hr/><hr/><hr/><hr/>
            </Paper>
            <Paper className={classes.headline}>
                <p>Full Stack Web Developer</p>
                <p>(In progress)</p>
                <img src={Load}/>
            </Paper>
            <Grid container className={classes.nav} spacing={3} direction='column' justify='flex-start'>
                <Grid item className={classes.box} xs={12}>
                    <Paper className={classes.icon}>
                        <img src={Moon} />
                        <p onClick={() => props.history.push('/resume')} className={classes.resume}>Resume</p>
                    </Paper>
                </Grid>
                <Grid item className={classes.box} xs={12}>
                    <Paper className={classes.icon}>
                    <img src={Telescope} />
                        <p onClick={() => props.history.push('/projects')} className={classes.past}>Past Projects</p>
                        
                        </Paper>
                </Grid>
                <Grid item className={classes.box} xs={12}>
                <Paper className={classes.icon}>
                    <img src={Stars} />
                    <p onClick={buttonClick} className={classes.about}>About Me</p>
                    
                        
                        </Paper>
                </Grid>
            </Grid>
            <div className={toggle ? 'about-me-show' : 'about-me-hide'}>
                <p>I have an extensive background in problem-solving on a daily basis and team-driven environments. I may not be extensively skilled in web development yet, but I am not afraid to put in the time and dedication to tackle any obstacle in my way; currently, that involves learning ReactJS. By the time that I graduate Lambda School as a full-stack web developer, I will know how to build an entire web application with ReactJS and React Redux, how to build a backend server/web API,  Node Frameworks, Python & Object Oriented Programming.</p>
            </div>
            <Paper className={classes.footer}>
            <p>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
            <p>Photo by Taylor Leopold on Unsplash</p>
            
            </Paper>
        </div>
    )
}
