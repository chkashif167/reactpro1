import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//components
import Navbar from "./components/Navbar/Navbar";
import Routers from "./components/Routers/Routers";
import "./app.scss";

const App = () => {
  return (
    <div className="App">
      {/* {console.log("_Token", localStorage.getItem("_token"))} */}
      <Router>
        <Navbar />
        <Routers />
      </Router>
    </div>
  );
};
export default App;
