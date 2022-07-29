import React from "react";
import { useState } from "react";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import { data } from "../data/datos";
import { useDrop } from "react-dnd";

const options = {
  elements: { bar: { borderWidth: 2 } },
  responsive: true,
  plugins: {
    legend: { position: "rigth" },
    title: { display: true, text: "graficas de prueba" },
  },
};

function ListCharts() {
  return (
    <div className="row d-flex ">
      {data.map((item) => (
        <div key={item.name} className="col-md-4">
          {item.type === "bar" ? (
            <BarChart
              chartData={item.data}
              options={options}
              title={item.title}
              id={item.id}
              name={item.name}
            />
          ) : item.type === "pie" ? (
            <PieChart
              chartData={item.data}
              options={options}
              title={item.title}
              id={item.id}
              name={item.name}
            />
          ) : (
            <LineChart
              chartData={item.data}
              options={options}
              title={item.title}
              id={item.id}
              name={item.name}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default ListCharts;
