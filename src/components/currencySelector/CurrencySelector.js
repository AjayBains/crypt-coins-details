import React, { useState, useEffect } from "react";
import "./currencySelector.css";

const CurrencySelector = ({ currency, handleCurrency }) => {
  const [supportedCurrency, setSupportedCurrency] = useState([]);
  const getSupportedCurrencies = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/supported_vs_currencies"
    );
    const currencies = await response.json();
    setSupportedCurrency(currencies);
    setTimeout(() => {
      console.log(supportedCurrency);
    }, 2000);
    // console.log(supportedCurrency);
  };
  useEffect(() => {
    getSupportedCurrencies();
  }, [currency]);

  return (
    <div className="currencySelector">
      <select value={currency} onChange={(e) => handleCurrency(e)}>
        <option value="usd">USD</option>
        {supportedCurrency.map((currency) => {
          return (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CurrencySelector;
