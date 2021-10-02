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

function CoinChart({ coin }) {
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState([]);

  const getCoinPriceHistory = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=usd&days=30&interval=daily`
    );
    const coinChitha = await response.json();

    let prices = [];

    coinChitha.prices.map((el, index) => {
      let price = el[1];
      let day = index;
      let priceperDay = { price, day };
      return prices.push(priceperDay);
    });

    setData(prices);
    setIsLoading(false);
  };

  useEffect(() => {
    getCoinPriceHistory();
  }, []);

  return <>{isLoading ? <p>Loading...</p> : <ChartPresent data={data} />}</>;
}

const ChartPresent = function ({ data }) {
  return (
    <div className="coinChart">
      <h4>Price chart for last 30 days in USD</h4>
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
    </div>
  );
};

export default CoinChart;
