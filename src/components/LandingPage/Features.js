import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
// import CardGiftcardOutlined from '@material-ui/icons/CardGiftcardOutlined';
import CasinoIcon from '@mui/icons-material/Casino';
// import TrendingUpOutlined from '@material-ui/icons/TrendingUpOutlined';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SavingsIcon from '@mui/icons-material/Savings';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';


const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingLeft: 50,
    paddingRight: 50,

    [theme.breakpoints.down('sm')]: {
      paddingLeft: 10,
      paddingRight: 10,
      padding: 10,
      paddingBottom: 35,
      paddingTop: 60,
      display: 'flex',
      justifyContent: 'center',
    },
  },
  itemsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  item: {
    marginBottom: 40,
    maxWidth: 400,
    marginLeft: 12,
    marginRight: 12,
    backgroundColor: '#00000045',
    padding: 30,
    height: '350px',
    [theme.breakpoints.down('md')]: {
      height: '100%',
    },
  },
  heading: {
    // color: theme.palette.pbr.textPrimary,
    color: theme.palette.pbr.heading,
    textAlign: 'left',
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    alignSelf: 'center',
    paddingTop: 0,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 15,
      fontSize: 24,
      marginBottom: 25,
    },
  },
  subHeading: {
    color: theme.palette.pbr.textPrimary,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 15,
      marginBottom: 25,
    },
  },
  para: {
    color: theme.palette.pbr.textPrimary,
    verticalAlign: 'baseline',
    // letterSpacing: "-0.7px",
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'left',
    height: 'auto',
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
      paddingTop: 5,
      marginTop: 0,
    },
  },
  subheading: {
    color: theme.palette.pbr.textPrimary,
  },
}));

const Feature = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <h6 className={classes.heading}>BullCore Products</h6>

      <div className={classes.itemsContainer}>
        <div className={classes.item}>
          <h5 className={classes.subheading}>
            <LocalActivityIcon fontSize="large" />
            Bull Raffles
          </h5>
          <p className={classes.para}>
          Bullcore Raffle Decentralized Token Based , 
          Holders of $BulC will be able to make Raffle transactions and you can also earn passive income from there, 
          because we provide not only a raffle platform for our project. 
          But we are developing our raffle site so that it can be used by other projects. 
          other than that we will continue to build for the continuity of our ecosystem 
          </p>
        </div>

        <div className={classes.item}>
          <h5 className={classes.subheading}>
            <StorefrontIcon fontSize="large" /> Bull NFT Marketplace
          </h5>
          <p className={classes.para}>
          the platform was built to empower the Core ecosystem and also allow users to easily create and market their NFTs, 
          as well as purchase NFTs from other users. payments are made using $Bulc & $Core. 
          In addition, the transaction fees used are very low so that users can transact more efficiently.
          </p>
        </div>

        <div className={classes.item}>
          <h5 className={classes.subheading}>
            <CasinoIcon fontSize="large" /> Bull Casino
          </h5>
          <p className={classes.para}>
          Every $BulC Token holder can make transactions on our casino platform
           and feel the many advantages there such as weekly prizes, jackpots.
           and lots of games there such as coinflip, crash, blackjack, baccarat, Poker, Slots and others.
we will provide unlimited fun for this platform
          </p>
        </div>
        <div className={classes.item}>
          <h5 className={classes.subheading}>
            <SavingsIcon fontSize="large" /> Bull Stake
          </h5>
          <p className={classes.para}>Bullcore holders will be able to stake Tokens and NFTs to earn $BulC with the highest APY,
             Bullcore is native currency. Holders will start receiving $BulC through the Bet system.
          </p>
        </div>
        <div className={classes.item}>
          <h5 className={classes.subheading}>
            <RocketLaunchIcon fontSize="large" /> Bull Pad
          </h5>
          <p className={classes.para}>
          Bullpad is a decentralized new project launch platform that provides additional advantages
            for token holders based on the level of tier holders achieved.
            this system gives token holders an opportunity to earn additional profits from Each
            the launch of new projects undertaken , such as discounts , bonuses , and special privileges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
