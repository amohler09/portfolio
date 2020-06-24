import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StepConnector from '@material-ui/core/StepConnector';
import StepLabel from '@material-ui/core/StepLabel';
import PanoramaFishEyeIcon from '@material-ui/icons/PanoramaFishEye';
import StarsIcon from '@material-ui/icons/Stars';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LensIcon from '@material-ui/icons/Lens';
const Star = require('../images/star1.png')


// xs --> 0-576 '@media(max-width 576px)'
// sm --> 577-768 -- '@media(max-width 768px)'
// md --> 769-992 -- '@media (max-width 992px)'
// lg --> 993-1160 -- '@media (max-width 1200px)'
// xl --> >1161 -- '@media (min-width 1201px)'
// all sizes -->
//   --fix background
//   -fix fixed position of description
//   --add flex wrap to button
  // xxs - less than 350px--> save for last
  // -really increase padding
// xs -->
//   -increase padding on Button
//   -font size is good
//   -increase padding on outer div
//   -slightly increase font size in description
// sm -->
//   -increase padding on Button
//   -font size is good
//   -increase padding on outer div
//   -slightly increase font size in description
//  --slightly increase date font size
  // lg -->
  //   -increase description font size
  //   -increase active font size
  // xl -->
  //   -increase description font size
  //   -increase date font size
  //   -increase active font size
  //   -slightly increase description line height
  //   --> >1400
  //     -increse description font size
  //     -decrease padding of stepbutton

    

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '3%',
    backgroundImage: 'linear-gradient(to top right, #111212 10%, #293E4B 45%, #CBAA34)',
    width: '100%',
    backgroundSize: 'cover',
  },
  flex: {
    display: 'flex',
    width: '100%',
    marginTop: '3%',
  },
  stepper: {
   backgroundColor: 'transparent',
   position: 'sticky',
  //  left: '8%',
   width: '45%',
   '@media(min-width: 426px)': {
    width: '35%'
  },
   },  
  icon: {
    margin: 'auto',
  },
  stepButton: {
    padding: '8%',
    borderRadius: '35px 35px 5px 5px',
    boxShadow: '-2px 2px 5px black',
    '@media(min-width: 426px)': {
      padding: '3%',
    },
  },
  stepLabel: {
    fontSize: '.5rem',
    margin: '0',
    fontFamily: 'Lato',
    textShadow: '0px 8px 5px #111212',
    boxShadow: '-5px 5px 10px black',
    borderRadius: '25px 25px 5px 5px',
    padding: '5% 0',
    color: 'white',
    '@media(min-width: 426px)': {
      fontSize: '.6rem',
    },
      '@media(min-width: 769px)': {
        fontSize: '.95rem',
        margin: 'auto',
      },
    '& p:nth-child(1)': {
      fontFamily: 'Playfair Display',
      margin: '2% 15%',
      fontSize: '.6rem',
      '@media(min-width: 426px)': {
        fontSize: '.8rem',
      },
      '@media(min-width: 769px)': {
        fontSize: '1.25rem',
        fontWeight: 'bold',
      },
    }
  },
  active: {
    color: 'whitesmoke',
    textShadow: '-5px 5px 5px #111212',
    fontSize: '1rem',
    marginLeft: '10%',
    textAlign: 'right',
    '& p:nth-child(2)': {
      fontSize: '.9rem',
      '@media(min-width: 769px)': {
        fontSize: '1.15rem',
      },
    },
    '@media(min-width: 769px)': {
      fontSize: '1.25rem',
     
    },
  },
  description: {
    marginTop: '5%',
    fontFamily: 'Lato',
    color: 'white',
    textShadow: '-0px 0px 8px black',
    position: 'fixed',
    left: '45%',
    width: '50%',
    '& ul': {
      listStyle: 'circle',
      fontSize: '.9rem',
      '@media(max-width: 700px)': {
        fontSize: '.60rem',
      },
      '& li': {
        marginTop: '1%'
      }
    }
  },
}));

const CustomConnector = withStyles({
  active: {
    '& $line': {
      width: '2%',
      backgroundImage: 'linear-gradient(to top right, #111212 10%, #293E4B 45%, #CBAA34)',
      boxShadow: '-3px 3px 8px white',
    },
  },
  line: {
    width: '1%',
    marginLeft: '50%',
    backgroundImage: 'linear-gradient(to bottom, #293E4B 45%, #111212)',
    padding: '5%',
  },
})(StepConnector);

export default function Resume() {
  
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(false);
  const steps = getSteps();

  function getSteps() {
    return [
      <><p>Full Stack Web Development Training</p><p>October 2019 - Present</p></>,
      <><p>Poker & Table Games Dealer</p><p>November 2017 - November 2018</p></>,
      <><p>Call Center Operations Manager</p><p>July 2013 - August 2017</p></>,
      <><p>Part B Appeals Representative</p><p>July 2012 - July 2013</p></>
       ];
  }
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <ul>
            Concepts Learned So Far:
            <li>HTML & Advanced CSS</li>
            <li>Sass/Less Preprocessing</li>
            <li>Github Flow</li>
            <li>JavaScript</li>
            <li>React & React Router</li>
            <li>Redux</li>
            <li>Context API</li>
            <li>Building Node.js Servers</li>
            <li>Client-Side Authentication</li>
            <li>GraphQL - Built Backend API</li>
            <li>Apollo GraphQL</li>
            <li>Managing Prisma, SQLite & Postgres databases</li>
            <li>Prismatopia Tech Stack</li>
            <li>To see some past project's I've done, <span className='link'>click here</span></li>
          </ul>
        );
      case 1:
        return (
        <ul>
          <li>Responsible for the distribution of cards and chips to players during a poker game</li>
          <li>Maintained efficient dealing of at least 28 games per hour</li>
          <li>Maintained regular communication with all players and provided exceptional customer service as well as an efficient game for all players</li>
          <li>Ability to do quick math to calculate bets as well as pots</li>
          <li>Quick memory recall and an ability to read poker hands very quickly to identify a winner</li>
        </ul>
        );
      case 2:
        return (
          <ul>
            <li>Sent daily reports of previous day's results</li>
            <li>Kept a running ledger of all income generated and all dispositions of leads from all sources</li>
            <li>Qualified and scheduled appointments for prospective home improvement buyers to meet with one of RMG's clients to discuss their home improvement needs</li>
            <li>Held weekly meetings with floor managers to discuss current call center production and make changes where necessary and bi-weekly meetings with upper-level managers to discuss floor manager production</li>
            <li>Managed time card system and tracked all employee's attendance, time off, sick days & vacation</li>
            <li>Identified service areas for RMG clients that would be best suited for the client needs and purchased home owner records to use in the dialing system</li>
            <li>Managed dialing system and adjusted calls as needed for business as well as adding and removing licenses to keep costs low</li>
            <li>Created and updated all employee handbooks, drug consent forms, non-compete forms, etc.</li>
            <li>Completed employer I-9's as well as all employee documents and filed per state and federal regulation</li>
            <li>Calculated and ran payroll on a weekly basis</li>
          </ul>
        );
        case 3:
          return (
            <ul>
              <li>Reviewed and processed medical policies, grievances, and denials of medical claims</li>
              <li>Contacted customers to gather details of their case, document the process as it moves through the system, provided a report regarding case statistics, and prepared for appeal hearings</li>
              <li>Analyzed insurance policies connected with a claim to determine company liability</li>
            </ul>
          )
      default:
        return 'Click on a Job Position to learn more';
    }
  }

  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  
  return (
    <div className={classes.root}>
      <div className={classes.flex}>
        <Stepper nonLinear orientation='vertical' className={classes.stepper} activeStep={activeStep} connector={<CustomConnector />}>
          {steps.map((label, index) => (
            <Step className={classes.jobTitle}>
              <StepButton className={classes.stepButton} onClick={handleStep(index)}orientation='vertical'>
       
                <StepLabel className={classes.icon} StepIconComponent={"img"} icon={Star}>
                  <div className={index === activeStep ? classes.active : classes.stepLabel}>
                  {label}
                    </div>
                    </StepLabel>
                
              </StepButton>
              
            </Step>
            
          ))}
        </Stepper>
        <div>
          <Typography className={classes.description}>{getStepContent(activeStep)}</Typography>
        </div>
      </div>    
    </div>
  );
}