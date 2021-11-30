import React from "react";
import { Link } from "react-router-dom";

const Coins = ({ currency, coins }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Market Cap Rank</th>
          <th>ICON</th>
          <th>Name</th>
          <th>Price({currency})</th>
          <th>All time High {currency}</th>
        </tr>
      </thead>
      <tbody>
        {coins.map((coin) => {
          const {
            id,
            name,
            image,
            current_price,
            ath,
            market_cap_rank,
            max_supply,
          } = coin;
          return (
            <tr key={id}>
              <td>{market_cap_rank}</td>
              <td>
                {" "}
                <img src={image} alt="" className="coin__img" />
              </td>
              <td>
                <Link to={`coin/${coin.id}`}>{name}</Link>
              </td>
              <td>
                {current_price} {currency.toUpperCase()}
              </td>
              <td>{ath}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Coins;
