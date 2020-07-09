import React from "react";
import Chart from "./Chart";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Long Ago", val: 500
  },
  {
    name: "Not Long Ago", val: 206
  },
  {
    name: "Now", val: 220
  },
  {
    name: "Future?", val: 92
  }
];

const Charts = ({ coinData }) => {
  return (
    <div className="charts">
      <div className="chart__container">
        <h2 className="coin__title">Opinion About Crypto</h2>
        <h4 className="coin__symbol">oac</h4>
        <LineChart width={1100} height={300} data={data}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
          <Line type="monotone" dataKey="val" stroke="#8884d8" />
        </LineChart>
        </div>
      {coinData.map(coin => (
        <div className="chart__container" key={coin.name}>
          <h2 className="coin__title">{coin.name}</h2>
          <h4 className="coin__symbol">{coin.symbol}</h4>
          <div className="coin__logo">
            <img src={coin.image} height="40" alt={coin.name} />
          </div>
          <Chart sparklineData={coin.sparkline_in_7d.price} />
        </div>
      ))}
    </div>
  );
};
export default Charts;
