import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./coinChart.css";

let data = [];

function CoinChart({ coin }) {
  console.log(coin);

  const [isLoading, setIsLoading] = useState(true);
  const [coinToMap, setCoinToMap] = useState("");

  const getCoinPriceHistory = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=usd&days=30&interval=daily`
    );
    const coinChitha = await response.json();
    console.log(coinChitha);

    setCoinToMap(coinChitha);
    coinChitha.prices.map((el, index) => {
      let price = el[1];
      let day = index + 1;
      let priceperDay = { price, day };
      return data.push(priceperDay);
    });
    setIsLoading(false);
  };
  useEffect(() => {
    getCoinPriceHistory();
    console.log(data);
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        // <div className="coinChart">coinchart{coin.name}</div>
        <ChartPresent />
      )}
    </>
  );
}

const ChartPresent = function () {
  return (
    <>
      <ResponsiveContainer width="50%" height="50%">
        <LineChart
          width={300}
          height={200}
          data={data}
          margin={{
            top: 50,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 4" />
          <XAxis dataKey={data.day} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default CoinChart;
