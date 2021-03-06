import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import FrontPageContainer from "./components/containers/frontPageContainer";

import registerServiceWorker from "./registerServiceWorker";
import UserProfileContainer from "./components/containers/userProfileContainer";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={FrontPageContainer} />
      <Route exact path="/my_profile/:_id" component={UserProfileContainer} />
    </div>
  </Router>,
  document.getElementById("root")
);

registerServiceWorker();
