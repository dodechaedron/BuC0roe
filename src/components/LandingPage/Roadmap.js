import { Avatar, IconButton, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import research from "../../assets/launch.png";
import farming from "../../assets/launch.png";
import launch from "../../assets/launch.png";
import tokenomics from "../../assets/launch.png";
import chain from "../../assets/launch.png";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const getStepsData = () => {
  return [
    {
      id: "1",
      title: "Step 1",
      heading: "",
      subheadings: [
        "Research & Team Forming",
        "Release Media Social",
        "Airdrop Community",
      ],
      completed: true,
      icon: launch,
    },
    {
      id: "2",
      title: "Step 2",
      heading: "",
      subheadings: [
        "Release Bullcore token smart contract",
        "Bullcore Presale & listing on Dex",
        "Whale Holder Voting System",
        "Whitepaper v1 & Upgrade website",
      ],
      completed: true,
      icon: launch,
    },
    {
      id: "3",
      title: "Step 3",
      heading: "",
      subheadings: [
        "Launch Staking & Farming Reveneu Reward",
        "Expand Media Social & Partnership",
        "CoinMarketCap & Coingenko Listing" ],
      completed: true,
      icon: launch,
    },
    {
      id: "4",
      title: "Step 4",
      heading: "",
      subheadings: [
        "Airdrop NFT Campaign",
        "Bullcore NFT Launch",
        "Launch Bullcore NFT Game x MemeRoyale BSC",
      ],
      completed: true,
      icon: launch,
    },
    {
      id: "5",
      title: "Step 5",
      heading: "",
      subheadings: [
        "Launch Bull NFT Marketplace",
        "Launch Bull Raffle",
      ],
      completed: false,
      icon: launch,
    },
    {
      id: "6",
      title: "Step 6",
      heading: "",
      subheadings: [
        "Launch Dapp Casino",
        "Launchpad BullPad Release",
      ],
      completed: false,
      icon: launch,
    },
  ];
};

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 20,
    height: "100%",
    paddingLeft: 100,
    [theme.breakpoints.down("md")]: {
      paddingLeft: 15,
      padding: 0,
      paddingBottom: 15,
      paddingTop: 60,
    },
  },
  heading: {
    color: theme.palette.pbr.heading,
    textAlign: "center",
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: "middle",
    wordSpacing: "0px",
    paddingTop: 50,
    marginBottom: 40,

    [theme.breakpoints.down("sm")]: {
      fontSize: 28,
    },
  },
  para: {
    color: theme.palette.pbr.textPrimary,

    verticalAlign: "baseline",
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  icon: {
    fontSize: 48,
    color: "#616161",
  },
  title: {
    fontWeight: 600,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    textAlign: "left",
    fontSize: 16,
    marginTop: 15,
    marginBottom: 15,
  },
  list: {
    width: 200,
    paddingLeft: 15,
    fontSize: 14,
  },
  sliderContainer: {
    display: "flex",
    alignItems: "center",
    marginLeft: 50,
    marginRight: 50,
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}));

const Roadmap = () => {
  const classes = useStyles();

  const steps = getStepsData();

  const [x, setX] = useState(0);
  const [shift, setShift] = useState(window.innerWidth < 500 ? 400 : 400);

  const goRight = () => {
    x === -shift * ([1, 2, 3, 4, 5, 6, 7, 8, 9].length - 8)
      ? setX(0)
      : setX(x - shift);
  };
  const goLeft = () => {
    x === shift * ([1, 2, 3, 4, 5, 6, 7, 8, 9].length - 9)
      ? setX(x + shift)
      : setX(0);
  };

  const goRightMob = () => {
    x === -shift * ([1, 2, 3, 4, 5].length - 1) ? setX(0) : setX(x - shift);
  };
  const goLeftMob = () => {
    x === shift * ([1, 2, 3, 4, 5].length - 1) ? setX(x + shift) : setX(0);
  };

  const handleLeftCarouselScroll = () => {
    if (window.innerWidth < 950) {
      goLeftMob();
    } else {
      goLeft();
    }
  };

  const handleRightCarouselScroll = () => {
    if (window.innerWidth < 900) {
      goRightMob();
    } else {
      goRight();
    }
  };

  useEffect(() => {
    if (window.innerWidth < 950) {
      handleRightCarouselScroll();
    }
  }, []);

  return (
    <div className={classes.background}>
      <div>
        <h6 className={classes.heading}>
          Bullcore RoadMap<strong className={classes.highlight}></strong>
        </h6>
      </div>

      <div className="row g-0 align-items-center ">
        <div className="col-2 col-md-1">
          <IconButton className="c--right" onClick={handleLeftCarouselScroll}>
            <ArrowBackIosIcon fontSize="large" style={{ color: "#ffffff" }} />
          </IconButton>
        </div>

        <div className="col-8 col-md-10">
          <div className="slider">
            {steps.map((stepData, index) => (
              <div
                key={index}
                className="slide"
                style={{
                  transform: `translateX(${x}%)`,
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Avatar src={stepData.icon} variant="rounded" />
                  <hr style={{ width: "95%", marginTop: 1, marginBottom: 3 }} />
                  <h3 style={{ color: "#e5e5e5", fontWeight: 700 }}>
                    {stepData.title}
                  </h3>
                  <h5
                    style={{ fontSize: 14, color: "#e5e5e5", fontWeight: 600 }}
                  >
                    {stepData.heading}
                  </h5>
                  <ul style={{ borderLeft: "1px solid grey	" }}>
                    {stepData.subheadings.map((subheading) => (
                      <li style={{ marginRight: -5, color: "#e5e5e5" }}>
                        <p style={{ fontSize: 14, fontWeight: 500 }}>
                          {subheading}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-2 col-md-1">
          <IconButton className="c--right" onClick={handleRightCarouselScroll}>
            <ArrowForwardIosIcon
              fontSize="large"
              style={{ color: "#ffffff" }}
            />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
