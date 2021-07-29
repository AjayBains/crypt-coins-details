import React, { useState, useEffect } from "react";
import { useRouteMatch, useParams } from "react-router-dom";
import CoinPage from "../components/CoinPage";

const Coindetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [coin, setCoin] = useState();
  const parameters = useRouteMatch();

  const getCoinDetails = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${parameters.params.name.toLowerCase()}`
    );
    const coinDetails = await response.json();
    console.log(coinDetails);
    setCoin(coinDetails);
    setIsLoading(false);
    console.log(parameters);
  };

  useEffect(() => {
    getCoinDetails();
  }, []);

  return <div>{isLoading ? <p>Loading...</p> : <CoinPage coin={coin} />}</div>;
};

export default Coindetails;
