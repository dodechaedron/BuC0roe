import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import PeopleAltOutlined from '@material-ui/icons/PeopleAltOutlined';
import FlareOutlined from '@material-ui/icons/FlareOutlined';
import TimelineOutlined from '@material-ui/icons/TimelineOutlined';
import TouchAppOutlined from '@material-ui/icons/TouchAppOutlined';
import VpnLockOutlined from '@material-ui/icons/VpnLockOutlined';
import DescriptionOutlined from '@material-ui/icons/DescriptionOutlined';
import CategoryIcon from '@material-ui/icons/Category';
import TimerIcon from '@material-ui/icons/Timer';

import { Link } from 'react-scroll';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBarBackground: {
    background: `#000000`,
    [theme.breakpoints.down('md')]: {
      borderBottom: '1px solid #e5e5e5',
    },
  },
  menuButton: {
    textTransform: 'none',
  },
  title: {
    fontWeight: 600,
    fontSize: 24,
  },
  iconText: {
    fontSize: 15,
  },
  icon: {},

  sectionDesktop: {
    marginLeft: 150,
    marginRight: 100,
    // marginTop: 50,
    [theme.breakpoints.down('md')]: {
      marginLeft: 5,
      marginRight: 5,
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  sectionMobile: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  row1: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },

  home: {
    textDecoration: 'none',
    color: 'black',
    cursor: 'pointer',
    marginRight: 5,
    marginLeft: 5,
  },
  nav: {
    marginRight: 15,
  },
  menuIcon: {
    color: '#212121',
    [theme.breakpoints.down('md')]: {
      color: '#e5e5e5',
    },
  },
  list: {
    width: '250px',
    height: '100%',
    backgroundColor: 'transparent',
  },
  fullList: {
    width: 'auto',
  },
  menuTitleMobile: {
    paddingLeft: 15,
    fontWeight: 500,
    verticalAlign: 'baseline',
    fontFamily: 'Balsamiq Sans',
    textAlign: 'left',
    fontSize: 14,
    paddingTop: 7,
  },

  tabs: {
    color: '#fbfbfb',
    display: 'none',

    fontWeight: 500,
    lineHeight: '24px',
    verticalAlign: 'baseline',
    letterSpacing: '0px',
    margin: 0,
    paddingRight: '10px',
    cursor: 'pointer',
    fontFamily: 'Balsamiq Sans',
    fontSize: '1.1vw',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  navbarShareIcons: {
    marginRight: 15,
    marginLeft: 15,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  mobileLink: {
    color: theme.palette.pbr.textSecondary,
    textDecoration: 'none',
  },
  mobileButton: {
    borderRadius: '50px',
    background: `linear-gradient(to bottom,#D9047C, #BF1088)`,
    lineHeight: '24px',
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    margin: 0,
    color: '#ffffff',
    padding: '5px 15px 5px 15px',
    fontWeight: 600,
  },
  outlinedWhitepaper: {
    borderRadius: '30px',
    border: '1px solid #28ec40',

    verticalAlign: 'baseline',
    letterSpacing: '-1px',
    margin: 0,

    color: '#28ec40',
    padding: '7px 10px 7px 10px',

    fontWeight: 500,
    fontSize: '1.1vw',
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
      width: 140,
    },
  },
  outlinedGame: {
    borderRadius: '30px',
    border: '1px solid #8e24aa',

    verticalAlign: 'baseline',
    letterSpacing: '-1px',
    margin: 0,

    color: '#8e24aa',
    padding: '7px 10px 7px 10px',
    fontWeight: 500,
    fontSize: '1.1vw',
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
      width: 140,
    },
  },
  buttonWhitePaper: {
    borderRadius: '30px',
    background: `linear-gradient(to right,#28ec40, #7af540)`,
    lineHeight: '24px',
    verticalAlign: 'baseline',
    letterSpacing: '-1px',
    margin: 0,
    marginTop: 5,
    color: '#ffffff',
    padding: '12px 16px 12px 16px',
    fontWeight: 500,
    fontSize: '1.1vw',
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
  },
  buttonGame: {
    borderRadius: '30px',
    background: `linear-gradient(to right,#28ec40, #39f050)`,
    lineHeight: '24px',
    verticalAlign: 'baseline',
    letterSpacing: '-1px',
    margin: 0,
    marginTop: 5,
    color: '#ffffff',
    padding: '12px 16px 12px 16px',
    fontWeight: 500,
    fontSize: '1.1vw',
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        {[
          { name: 'About', id: 'About', icon: <TouchAppOutlined /> },
          // {
          //   name: 'Characters',
          //   id: 'characters',
          //   icon: <PeopleAltOutlined />,
          // },
          // { name: 'Game Items', id: 'items', icon: <VpnLockOutlined /> },
          { name: 'Features', id: 'Features', icon: <FlareOutlined /> },
          { name: 'Tokenomic', id: 'Tokenimic', icon: <CategoryIcon /> },
          { name: 'Roadmap', id: 'roadmap', icon: <TimelineOutlined /> },
          {},
        ].map((tab, index) => (
          <Link activeClass="active" to={tab.id} smooth={true} offset={0} duration={500} delay={0}>
            <ListItem button key={tab.name} onClick={toggleDrawer(anchor, false)}>
              <Typography className={classes.menuTitleMobile}>{tab.name}</Typography>
            </ListItem>
          </Link>
        ))}
        <Divider />
        <ListItem button>
          <a href="Coming Soon" style={{ textDecoration: 'none' }}>
            <Button variant="outlined" className={classes.outlinedWhitepaper}>
              White paper
            </Button>
          </a>
        </ListItem>
        <ListItem button style={{ marginTop: 5 }}>
          <a href="#" target= "_blank" style={{ textDecoration: 'none' }}>
            <Button variant="outlined" className={classes.outlinedGame}>
              Buy 
            </Button>
          </a>
        </ListItem>
        <ListItem button style={{ marginTop: 5 }}>
          <a href="#" style={{ textDecoration: 'none' }}>
            <Button variant="outlined" className={classes.outlinedGame}>
              Ecosystem
            </Button>
          </a>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="relative" className={classes.appBarBackground}>
        <Toolbar className={classes.sectionDesktop}>
          <Link
            exact="true"
            activeClass="active"
            to="header-section"
            smooth={true}
            offset={-60}
            duration={400}
            delay={0}
            className={classes.home}>
            <Avatar variant="square" src="assets/logo-bullcore-down.png" style={{ height: 64, width: 64 }} />
          </Link>
          <div className={classes.grow} />

          <Link
            exact="true"
            activeClass="active"
            to="intro"
            smooth={true}
            offset={0}
            duration={400}
            delay={0}
            className={classes.home}>
            <Typography className={classes.tabs} variant="body1">
              About
            </Typography>
          </Link>
          {/* <Link exact="true" to="characters" smooth={true} offset={0} duration={400} delay={0} className={classes.home}>
            <Typography className={classes.tabs} variant="body1">
              Characters
            </Typography>
          </Link>
          <Link exact="true" to="items" smooth={true} offset={0} duration={400} delay={0} className={classes.home}>
            <Typography className={classes.tabs} variant="body1">
              Game Items
            </Typography>{' '}
          </Link> */}
          <Link exact="true" to="Features" smooth={true} offset={0} duration={400} delay={0} className={classes.home}>
            <Typography className={classes.tabs} variant="body1">
              Features
            </Typography>{' '}
          </Link>
          <Link exact="true" to="tokenomics" smooth={true} offset={0} duration={400} delay={0} className={classes.home}>
            <Typography className={classes.tabs} variant="body1">
              Tokenomics
            </Typography>{' '}
          </Link>

          <Link exact="true" to="roadmap" smooth={true} offset={0} duration={400} delay={0} className={classes.home}>
            <Typography className={classes.tabs} variant="body1">
              Roadmap
            </Typography>{' '}
          </Link>

          <div style={{ paddingRight: 10 }}>
            <Tooltip title="#">
              <a href="Coming Soon">
                <Button className={classes.buttonWhitePaper} variant="contained" startIcon={<DescriptionOutlined />}>
                  White paper
                </Button>
              </a>
            </Tooltip>
          </div>
          <div style={{ paddingRight: 10 }}>
            {' '}
            <Tooltip title="Buy">
              <a href="#" target='_blank'>
                <Button className={classes.buttonGame} variant="contained">
                  Buy 
                </Button>
              </a>
            </Tooltip>
          </div>
          <div>
            {' '}
            <Tooltip title="Ecosystem">
              <a href="Ecosystem">
                <Button className={classes.buttonGame} variant="contained">
                  Ecosystem
                </Button>
              </a>
            </Tooltip>
          </div>
        </Toolbar>

        <Toolbar className={classes.sectionMobile}>
          <div className={classes.row1}>
            <div className={classes.grow} />
            <Link
              exact="true"
              // exact="true"
              activeClass="active"
              to="header-section"
              smooth={true}
              offset={0}
              duration={500}
              delay={0}
              className={classes.home}>
              <Avatar variant="square" src="assets/logo-bullcore-down.png" style={{ height: 55, width: 110 }} />
            </Link>

            <div className={classes.grow} />
            <div>
              {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                  <IconButton
                    aria-label="Menu"
                    aria-haspopup="true"
                    className={classes.menuIcon}
                    onClick={toggleDrawer(anchor, true)}>
                    <MenuIcon />
                  </IconButton>

                  <SwipeableDrawer
                    anchor={anchor}
                    disableSwipeToOpen={false}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}>
                    {list(anchor)}
                  </SwipeableDrawer>
                </React.Fragment>
              ))}
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
