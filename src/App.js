import "./App.css";
import ListCharts from "./components/ListCharts";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App container">
        <ListCharts />
      </div>
    </DndProvider>
  );
}

export default App;
