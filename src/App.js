
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./routes";
import 'toastr/build/toastr.min.js'
import "bootswatch/dist/quartz/bootstrap.css";
import "./App.css";
import 'toastr/build/toastr.css'

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
