import React from "react";
import { useState } from "react";
import { useDrag } from "react-dnd";
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
function PieChart({ chartData, options, title, id, name }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "chart",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

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
      <div
        id={id}
        ref={drag}
        className="card mt-3 border-1"
        style={{ background: isDragging ? "pink" : "" }}
      >
        <div className="card-header">{name}</div>
        <div className="card-body">
          <Pie data={userData} options={options} />
        </div>
      </div>
    )
  );
}

export default PieChart;
