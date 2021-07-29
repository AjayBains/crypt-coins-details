import React, { useState, useEffect } from "react";
import Coins from "./components/Coins";
import CoinsPagination from "./components/CoinsPagination.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Coindetails from "./components/Coindetails";

import "./App.css";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  const getCoinList = async () => {
    // const response = await fetch("https://api.coingecko.com/api/v3/coins/list");
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`
    );

    const coinList = await response.json();

    setCoins(coinList);
  };
  const checkNext = async () => {
    // const response = await fetch("https://api.coingecko.com/api/v3/coins/list");
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=${
        page + 1
      }&sparkline=false`
    );

    const coinList = await response.json();

    coinList.length === 0 && setHasNextPage(false);
  };

  useEffect(() => {
    getCoinList();
  }, [page]);

  useEffect(() => {
    checkNext();
  }, [page]);
  function search(rows) {
    return rows.filter(
      (row) => row.name.toLowerCase().indexOf(q.toLowerCase()) > -1
    );
  }
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
            <div style={{ textAlign: "center", padding: ".5rem" }}>
              <label
                htmlFor="search"
                style={{ fontWeight: 700, marginRight: ".3rem" }}
              >
                Search
              </label>
              <input
                type="text"
                id="search"
                value={q}
                name="search"
                onChange={(e) => {
                  setQ(e.target.value);
                }}
                style={{ padding: ".2rem" }}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <CoinsPagination page={page} setPage={setPage} />
            </div>

            <Coins coins={search(coins)} />
            <CoinsPagination page={page} setPage={setPage} />
          </div>
        </Route>
        <Route exact path="/coin/:name">
          <Coindetails />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
