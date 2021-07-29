import React, { useState } from "react";
import { Link } from "react-router-dom";

const CoinPage = ({ coin }) => {
  console.log(coin);
  const [show, setShow] = useState(false);
  const { image, name, description, symbol } = coin;
  return (
    <div>
      <h3>Name:{name}</h3>
      <img src={image.large} alt="" />
      <p>
        Descripton:{" "}
        {show ? description.en : description.en.substring(0, 100) + "..."}
      </p>
      <button onClick={() => setShow(!show)}>
        {show ? "Read Less" : "Read More"}
      </button>
      <div style={{ marginTop: "3rem" }}>
        <button>
          <Link to="/">Go back</Link>
        </button>
      </div>
    </div>
  );
};

export default CoinPage;
