import CardMedia from "@material-ui/core/CardMedia";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import tokenomics_back from "../../assets/tokenomic.png";

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    height: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingLeft: 50,
    paddingRight: 50,

    [theme.breakpoints.down("md")]: {
      paddingLeft: 10,
      paddingRight: 10,
      padding: 10,
      paddingBottom: 35,
      paddingTop: 60,
      display: "flex",
      flexDirection: "column-reverse",
      justifyContent: "flex-end",
    },
  },
  heading: {
    color: theme.palette.pbr.textPrimary,
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: "middle",
    wordSpacing: "0px",
    paddingTop: 0,
    marginBottom: 40,
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
      marginBottom: 45,
      alignSelf: "center",
    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    marginRight: 60,
    backgroundColor: "#00000045",
    padding: 40,
    [theme.breakpoints.down("md")]: {
      marginRight: 0,
      padding: 10,
    },
  },
  listText: {
    color: theme.palette.pbr.textSecondary,
    fontSize: 24,
    fontWeight: 400,
    verticalAlign: "middle",
    wordSpacing: "0px",
    alignSelf: "center",
    paddingTop: 0,
    [theme.breakpoints.down("sm")]: {
      fontSize: 22,
    },
  },
  image: {
    width: 850,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: 10,
    },
  },
  itemsContainer: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  listItems: {},
  listItem: {
    marginBottom: 10,
    color: theme.palette.pbr.textPrimary,
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
    },
  },
  subheading: {
    color: theme.palette.pbr.textPrimary,
    fontSize: 20,
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },
  displayMobile: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  displayDesktop: {
    display: "block",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

const Tokenomics = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div className="row">
        <div className="col-md-6 ">
          <div className={classes.displayDesktop}>
            <div className="text-center">
              {" "}
              <img
                className={classes.image}
                src="images/tokenomic.png"
                alt="tokenomics"
              />{" "}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className={classes.textContainer}>
            <h6 className={classes.heading}>Tokenomics</h6>
            <div className={classes.displayMobile}>
              <div className="text-center">
                {" "}
                <img
                  className={classes.image}
                  src="images/tokenomic.png"
                  alt="tokenomics"
                />{" "}
              </div>
            </div>
            <h5 className={classes.subheading}>Total Supply 1,000,000,000</h5>
            <ul className={classes.listItems}>
              <li className={classes.listItem}>
                <p>
                  <strong style={{ marginRight: 5 }}>
                    Burn{" "}
                  </strong>
                  <a
                    target="_blank"
                    style={{ color: "Green" }}
                    href="https://scan.coredao.org/"
                  >
                    Buy back and burned 
                  </a>
                </p>
              </li>
              <li className={classes.listItem}>
                <p>
                  <strong style={{ marginRight: 5 }}>Airdrop 5%</strong> 50,000,000
                </p>
              </li>
              <li className={classes.listItem}>
                <p>
                  <strong style={{ marginRight: 5 }}>Presale 25%</strong> 250,000,000
                </p>
              </li>
              <li className={classes.listItem}>
                <p>
                  <strong style={{ marginRight: 5 }}>Liquidity 15%</strong> 150,000,000
                </p>
              </li>
              <li className={classes.listItem}>
                <p>
                  <strong style={{ marginRight: 5 }}>Staking & Farming 10%</strong> 100,000,000
                </p>
              </li>
              <li className={classes.listItem}>
                <p>
                  <strong style={{ marginRight: 5 }}>Ecosystem 15%</strong> 150,000,000
                </p>
              </li>
              <li className={classes.listItem}>
                <p>
                  <strong style={{ marginRight: 5 }}>Reverse 5%</strong> 50,000,000
                </p>
              </li>
              <li className={classes.listItem}>
                <p>
                  <strong style={{ marginRight: 5 }}>Team 5%</strong> 50,000,000
                </p>
              </li>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
