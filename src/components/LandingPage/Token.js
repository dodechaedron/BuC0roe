import CardMedia from '@material-ui/core/CardMedia';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import token from '../../assets/logopepe.png';

import AccountBalanceOutlined from '@material-ui/icons/AccountBalanceOutlined';
import LocalFloristOutlined from '@material-ui/icons/LocalFloristOutlined';
import SendOutlined from '@material-ui/icons/SendOutlined';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      padding: 10,
    },
  },
  heading: {
    color: theme.palette.pbr.heading,
    // textAlign: "left",
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    alignSelf: 'center',
    paddingTop: 0,

    [theme.breakpoints.down('md')]: {
      // fontSize: 28,
      marginTop: 50,
      marginBottom: 50,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 28,
      marginBottom: 45,
    },
  },

  image: {
    height: 550,
    width: 500,
    [theme.breakpoints.down('md')]: {
      width: 700,
      height: 700,
    },
    [theme.breakpoints.down('xs')]: {
      width: 350,
      height: 350,
    },
  },
  card: {
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
    url('./assets/utility.jpg') `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 320,
    width: 300,
    borderRadius: 7,
    border: '5px solid #757575',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 30,
  },
  title: {
    paddingTop: 10,
    textAlign: 'center',
    fontWeight: 600,
    fontSize: 24,
    color: 'white',
    fontFamily: 'Balsamiq Sans',
  },
  para: {
    fontWeight: 400,
    verticalAlign: 'baseline',
    letterSpacing: '-0.7px',
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
      paddingTop: 5,
      marginTop: 0,
    },
  },
}));

const Token = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <h6 className={classes.heading}>PepeNetwork hyper deflationary</h6>
      <h3 className={classes.heading}>15% buy | 15% sell tax</h3>
      <div className="row mt-5">
        <div className="col-md-4 d-flex justify-content-center">
          <div className={classes.card}>
            <div className="d-flex justify-content-center">
              {' '}
              <img src={token} width="50px" height="50px" alt="logo" style={{ width: 50, height: 50 }} />
            </div>

            <h5 className={classes.title}>Auto Burn</h5>
            <div className="d-flex justify-content-center">
              {' '}
              <hr style={{ width: 50, backgroundColor: 'white', height: 3, margin: 10 }} />
            </div>
            <p className={classes.para}>2% of Every Buy and Sale goes to the burn wallet for Life</p>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <div className={classes.card}>
            <div className="d-flex justify-content-center">
              {' '}
              <img src={token} width="50px" height="50px" style={{ width: 50, height: 50 }} alt="logo" />
            </div>
            <h5 className={classes.title}>Auto Liquidity Adder</h5>
            <div className="d-flex justify-content-center">
              {' '}
              <hr style={{ width: 50, backgroundColor: 'white', height: 3, margin: 10 }} />
            </div>
            <p className={classes.para}>8% Of Every Buy and Sale Strengthens Our Liquidity For Life.</p>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <div className={classes.card}>
            <div className="d-flex justify-content-center">
              {' '}
              <img src={token} width="50px" height="50px" style={{ width: 50, height: 50 }} alt="logo" />
            </div>
            <h5 className={classes.title}>Marketing & Ecosystem </h5>
            <div className="d-flex justify-content-center">
              {' '}
              <hr style={{ width: 50, backgroundColor: 'white', height: 3, margin: 10 }} />
            </div>
            <p className={classes.para}>
            5% Of Every Buy and Sale Strengthens Marketing & Ecosystem, Keeps it running and can grow to build a great Project with Ecosystem. In the future this will be used as a weekly giveaway for Raffle, Casino.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Token;
