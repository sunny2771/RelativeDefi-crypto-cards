import React from "react";
import classes from "../src/App.module.css";

interface cardDataProps {
  card: {
    id: number;
    topImg: string;
    coinName: string;
    currentPrice: number;
    shibCurrentPrice?: string;
    increment: string;
    actualPrice: string;
    coinImg: {
      img1: string;
      img2: string;
      img3: string;
    }[];
  };
}

const Cards: React.FC<cardDataProps> = ({ card }) => {
  return (
    <>
      <div className={classes.card} key={card.id}>
        <div className={classes["card-img"]}>
          <img
            className={
              card.coinName === "Bitcoin (BTC)" ? classes.bitLogo : classes.logo
            }
            src={card.topImg}
            alt="coinImg"
          />
        </div>
        <div className={classes["cardInfo"]}>
          <h6 className={classes.coinName}>{card.coinName}</h6>
          <div className={classes.price}>
            ${card.shibCurrentPrice ? card.shibCurrentPrice : card.currentPrice}
            {/* {card.currentPrice} */}
            <span>{card.increment}</span>
          </div>

          <h6>Price</h6>
          <div className={classes.price}>$ {card.actualPrice}</div>

          <h6>TVL</h6>
          <div className={classes.popular_pairs}>
            {card.coinImg.map((img) => (
              <>
                <img
                  className={classes.logo_pairs}
                  src={img.img1}
                  loading="lazy"
                  alt=""
                />
                <img
                  className={classes.logo_pairs}
                  src={img.img2}
                  loading="lazy"
                  alt=""
                />
                <img
                  className={classes.logo_pairs}
                  src={img.img3}
                  loading="lazy"
                  alt=""
                />
              </>
            ))}
          </div>

          <h6>Popular Pairs</h6>
        </div>
      </div>
    </>
  );
};

export default Cards;
