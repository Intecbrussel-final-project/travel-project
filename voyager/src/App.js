import React from "react";

import "./App.css";
import { Button } from "react-bootstrap";
import Api from "./components/Api";
import Homepage from "./components/Hompepage";
import Logo from "./vlogo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Hompepage from "./components/Hompepage";
function App() {
  return (
    <div className="App masthead">
      <Api />
    </div>
  );
}

export default App;
