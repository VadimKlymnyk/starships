import React from "react";
import { connect } from "react-redux";
import * as requests from "../requests/Requests";
import ViewStarship from "./viewOneStarship/ViewStarship";
import Page from "./listStarships/Page";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-light bg-light">
          <Link to="/">
            <span className="navbar-brand">Home</span>
          </Link>
        </nav>

        <Switch>
          <Route exact path="/" >
            <Page/>
          </Route>
          <Route exact path="/starships/:id" component={ViewStarship} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
