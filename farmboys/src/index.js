import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import FrontPageContainer from "./components/containers/frontPageContainer";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={FrontPageContainer} />
    </div>
  </Router>,
  document.getElementById("root")
);

registerServiceWorker();
