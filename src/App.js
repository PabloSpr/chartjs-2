import "./App.css";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import LineChart from "./components/LineChart";
import { data } from "./data/datos";

const options = {
  elements: { bar: { borderWidth: 2 } },
  responsive: true,
  plugins: {
    legend: { position: "rigth" },
    title: { display: true, text: "graficas de prueba" },
  },
};

function App() {
  return (
    data && (
      <div className="App container">
        <div className="row d-flex">
          {data.map((item) => (
            <div key={item.name} className="col-md-4">
              <div className="card m-2">
                <div className="card-header">{item.name}</div>
                <div className="card-body">
                  {item.type === "bar" ? (
                    <BarChart
                      chartData={item.data}
                      options={options}
                      title={item.title}
                    />
                  ) : item.type === "pie" ? (
                    <PieChart
                      chartData={item.data}
                      options={options}
                      title={item.title}
                    />
                  ) : (
                    <LineChart
                      chartData={item.data}
                      options={options}
                      title={item.title}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
}

export default App;
