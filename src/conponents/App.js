import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as requests from "../requests/Requests";
import ListStarships from "./ListStarships";
import ViewStarship from "./ViewStarship";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App(props) {
  useEffect(() => {
    props.getPosts();
  }, []);

  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">
            Home
          </a>
        </nav>
        
        <Switch>
          <Route exact path="/">
            <h1>Starships</h1>
            <div>{<ListStarships list={props.list} />}</div>
          </Route>
          <Route exact path="/starships/:id">
            <ViewStarship/>
          </Route>
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
    getPosts: () => {
      requests.all(dispatch);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
