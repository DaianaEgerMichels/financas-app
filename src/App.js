import "bootswatch/dist/quartz/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
