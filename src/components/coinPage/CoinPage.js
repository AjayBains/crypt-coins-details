import React, { useState } from "react";
import { Link } from "react-router-dom";
import CoinChart from "../coinChart/CoinChart";
import "./coinPage.css";

const CoinPage = ({ coin }) => {
  // console.log(coin);
  const [show, setShow] = useState(false);
  const { image, name, description, symbol } = coin;
  return (
    <div className="coinPage">
      <div className="coinPageLeft">
        <h3 className="coinPageCoinTitle title">Name:{name}</h3>
        <img src={image.small} alt="" className="coinPageCoinImg" />
        <p className="coinDescription">
          {show ? description.en : description.en.substring(0, 100) + "..."}
        </p>
        <button onClick={() => setShow(!show)} className="btn">
          {show ? "Read Less" : "Read More"}
        </button>
        <div style={{ marginTop: "3rem" }}>
          <button className="btn">
            <Link to="/">Go back</Link>
          </button>
        </div>
      </div>
      <div className="coinPageRight">
        <CoinChart coin={coin} />
      </div>
    </div>
  );
};

export default CoinPage;
