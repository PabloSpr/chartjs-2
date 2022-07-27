import React from "react";
import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

//--
import { Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

//--
function PieChart({ chartData, options, title }) {
  const [userData, setUserData] = useState({
    labels: chartData && chartData.map((data) => data.year),
    datasets: [
      {
        label: title,
        data: chartData && chartData.map((data) => data.data),
        backgroundColor: [
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
          "#rgba(75,192,192,1)",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    userData && (
      <div>
        <Pie data={userData} options={options} />
      </div>
    )
  );
}

export default PieChart;
