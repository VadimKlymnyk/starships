import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ListStarships from "./ListStarships";
import * as requests from "../requests/Requests";
import Pagination from "./Paginations";
import SearchByName from "./Search";
import { useParams } from "react-router-dom";

const Page = ({ props }) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    props.getPosts(currentPage, 0);
  }, [currentPage]);

  function Search(body) {
    props.getPosts(0, body);
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
          <Pagination paginate={setCurrentPage} count={props.count} />
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

export default Page;
