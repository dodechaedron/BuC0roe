import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import CardGiftcardOutlined from '@material-ui/icons/CardGiftcardOutlined';
import SportsEsportsOutlined from '@material-ui/icons/SportsEsportsOutlined';
import TrendingUpOutlined from '@material-ui/icons/TrendingUpOutlined';

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
            <SportsEsportsOutlined fontSize="large" />
            Bull Raffles
          </h5>
          <p className={classes.para}>
          Bullcore Raffle Berbasis Token desentralisasi ,
Pemegang $Bulc akan dapat melakukan transaksi Raffle dan
 Anda juga bisa mendapatkan penghasilan pasif dari sana, 
 karena kami tidak hanya menyediakan platform undian untuk proyek kami. 
 Tetapi kami sedang mengembangkan situs undian kami sehingga dapat digunakan oleh proyek lain. 
          </p>
        </div>

        <div className={classes.item}>
          <h5 className={classes.subheading}>
            <TrendingUpOutlined fontSize="large" /> Bull NFT Marketplace
          </h5>
          <p className={classes.para}>
          Platform yang di bangun untuk menghidupkan ekosistem Core dan juga mendukung pengguna dapat membuat dan memasarkan NFT mereka
          dengan mudah,
          serta membeli NFT dari pengguna lain .
          pembayaran dilakukan dengan menggunakan $Bulc & $Core. selain itu, biaya transaksi yang di gunakan sangat rendah,
          sehingga memungkinkan pengguna untuk bertransaksi dengan lebih efisien.
          </p>
        </div>

        <div className={classes.item}>
          <h5 className={classes.subheading}>
            <CardGiftcardOutlined fontSize="large" /> Bull Casino
          </h5>
          <p className={classes.para}>
          Setiap pemegang Token $Bulc dapat melakukan transaksi di platform kasino kami 
          dan merasakan banyak keuntungan di sana seperti hadiah mingguan, jackpot. 
          dan banyak sekali permainan disana seperti coinflip, crash, blackjack, baccarat, Poker, Slots dan lain-lain.
          </p>
        </div>
        <div className={classes.item}>
          <h5 className={classes.subheading}>
            <CardGiftcardOutlined fontSize="large" /> Bull Stake
          </h5>
          <p className={classes.para}>Pemegang Bullcore akan dapat mempertaruhkan Token dan NFT untuk mendapatkan $Bulc dengan APY tertinggi, 
          mata uang asli Bullcore. Pemegang akan mulai menerima $Bulc melalui sistem Taruhan kami.
          </p>
        </div>
        <div className={classes.item}>
          <h5 className={classes.subheading}>
            <CardGiftcardOutlined fontSize="large" /> Bull Pad
          </h5>
          <p className={classes.para}>
           Bullpad adalah desentralisasi platform peluncuran proyek baru yang memberikan keuntungan tambahan
           bagi pemegang token berdasar kan level tier holder yang di capai.
           sistem ini memberikan kesempatan kepada pemegang token untuk memperoleh keuntungan tambahan dari Setiap
           peluncuran proyek baru yang dilakukan , seperti potongan harga, bonus , dan hak istimewa khusus .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
