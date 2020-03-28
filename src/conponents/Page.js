import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ListStarships from "./ListStarships";
import * as requests from "../requests/Requests";
import Pagination from "./Paginations";
import SearchByName from "./Search"
import { useParams } from "react-router-dom";

const Page = ({ props }) => {
  const [currentPage, setCurrentPage] = useState(1);
  let a;

  useEffect(() => {
    props.getPosts(currentPage);
  }, [currentPage]);

   function Search(body) {
    console.log(body)
  }

  return (
    <div>
      <h1>{`Starships Page ${currentPage}`}</h1>
      <nav className="navbar navbar-light bg-light">
      <SearchByName onCreate={Search} />
      </nav>
      {!props.loading ? (
        <div>
          <div>{<ListStarships list={props.list} />}</div>
          <Pagination paginate={setCurrentPage} />
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = ({ search }) => {
    return {
    search: search.data,
      loading: search.loading
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      getPosts: name => {
        requests.searchByName(dispatch, name);
      }
    };
  };

  
  export default connect(mapStateToProps, mapDispatchToProps)(Page);
