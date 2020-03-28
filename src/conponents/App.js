import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as requests from '../requests/Requests'
import ListStarships from './ListStarships'




function App(props) {
  useEffect(() => {
    props.getPosts();
  }, []);

  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Home
        </a>
      </nav>
      <h1>Starships get</h1>
      <div>{<ListStarships list={props.list} />}</div>
    </div>
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
