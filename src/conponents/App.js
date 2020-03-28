import React from "react";
import { connect } from "react-redux";
import * as requests from "../requests/Requests";
import ViewStarship from "./ViewStarship";
import Page from "./Page";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App(props) {
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
            <Page props={props} />
          </Route>
          <Route exact path="/starships/:id" component={ViewStarship} />
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = ({ list }) => {
  return {
    list: list.data,
    loading: list.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: page => {
      requests.all(dispatch, page);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
