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
      <h6 className={classes.heading}>Utility</h6>

      <div className={classes.itemsContainer}>
        <div className={classes.item}>
          <h5 className={classes.subheading}>
            <LocalActivityIcon fontSize="large" />
            Pepe Swap
          </h5>
          <p className={classes.para}>
          Pepe Swap is a token exchange platform that is part of the Pepe All-in-One Platform ecosystem. The goal is to facilitate the fast and secure exchange of $PepeN tokens and other crypto tokens. Pepe Swap uses decentralized technology and provides various features
          </p>
        </div>

        <div className={classes.item}>
          <h5 className={classes.subheading}>
            <StorefrontIcon fontSize="large" /> Pepe NFT Marketplace
          </h5>
          <p className={classes.para}>
          the platform was built to empower the PepeNetwork ecosystem and also allow users to easily create and market their NFTs, 
          as well as purchase NFTs from other users. payments are made using $PepeN. 
          In addition, the transaction fees used are very low so that users can transact more efficiently.
          </p>
        </div>

        <div className={classes.item}>
          <h5 className={classes.subheading}>
            <CasinoIcon fontSize="large" /> Pepe All in one Platfrom
          </h5>
          <p className={classes.para}>
          Pepe All-in-One Platform is an integrated ecosystem that includes several different services dedicated to the use of $PepeN tokens and $PepeN collections. This platform is designed to facilitate various activities,Pepe Swap, NFT Marketplace, Pepe Casino, Pepe pad, to Pepe staking.
          </p>
        </div>
        <div className={classes.item}>
          <h5 className={classes.subheading}>
            <SavingsIcon fontSize="large" /> Pepe Stake
          </h5>
          <p className={classes.para}>PepeN holders will be able to stake Tokens and NFTs to earn $PepeN with the highest APY,
             PepeN is native currency. Holders will start receiving $PepeN through the Fair system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
