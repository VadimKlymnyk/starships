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
import Pagination from "./Paginations";

function App(props) {
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    props.getPosts(currentPage);
  }, [currentPage]);

  async function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-light bg-light">
          <Link to="/?page=1">
            <a className="navbar-brand">Home</a>
          </Link>
        </nav>

        <Switch>
          <Route exact path="/">
            <h1>{`Starships Page ${currentPage}`}</h1>
            <div>{<ListStarships list={props.list} />}</div>
            <Pagination paginate={paginate} />
          </Route>
          <Route exact path="/starships/:id">
            <ViewStarship />
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
    getPosts: page => {
      requests.all(dispatch, page);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
