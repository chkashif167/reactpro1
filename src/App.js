import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//components
import Navbar from "./components/Navbar/Navbar";
import Routers from "./components/Routers/Routers";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routers />
      </Router>
    </div>
  );
};
export default App;
