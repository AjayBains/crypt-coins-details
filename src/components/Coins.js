import React from "react";

const Coins = ({ coins }) => {
  return (
     <table>
     <thead>
       <tr>
         <th>Market Cap Rank</th>
         <th>ICON</th>
         <th>Name</th>
         <th>Price(INR)</th>
         <th>Max Supply</th>
       </tr>
     </thead>
     <tbody>
       {coins.map((coin) => {
        const {
          id,
          name,
          image,
          current_price,
          market_cap,
          market_cap_rank,
          max_supply,
        } = coin;
        return (
          <tr>
            <td>{market_cap_rank}</td>
             <td> <img src={image} alt="" className="coin__img" /></td>
            <td>{name}</td> 
            <td>{current_price} INR</td>
            <td>{max_supply}</td>

          </tr>         
        );
      })}
       {/* <tr>
         <td></td>
       </tr> */}
     </tbody>
   </table>
    // <div style={{ textAlign: "center" }}>
    //   <div
    //     className="coin__details"
    //     style={{ backgroundColor: "black", color: "white" }}
    //   >
    //     <p>Market Cap Rank</p>
    //     <p>Icon</p>
    //     <p>Name</p>
    //     <p>Price(INR)</p>
    //     <p>MAx Supply</p>
    //   </div>
    //   {/* <h2>CoinList</h2> */}
      // {coins.map((coin) => {
      //   const {
      //     id,
      //     name,
      //     image,
      //     current_price,
      //     market_cap,
      //     market_cap_rank,
      //     max_supply,
      //   } = coin;
      //   return (
      //     <section key={id}>
      //       <div className="coin__details" style={{ backgroundColor: "cyan" }}>
      //         <p>{market_cap_rank}</p>
      //         <img src={image} alt="" className="coin__img" />
      //         <p>{name}</p>
      //         <p>{current_price} INR</p>
      //         <p>{max_supply}</p>
      //       </div>
      //     </section>
      //   );
      // })}
    // </div>
  );
};

export default Coins;
