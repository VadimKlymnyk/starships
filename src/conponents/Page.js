import React, { useEffect, useState } from "react";
import ListStarships from "./ListStarships";
import Pagination from "./Paginations";
import { useParams } from "react-router-dom";

const Page = ({ props }) => {
  
  console.log(props.list);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    props.getPosts(currentPage);
  }, [currentPage]);
  return (
    <div>
      <h1>{`Starships Page ${currentPage}`}</h1>
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            SearchName
          </button>
        </form>
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
export default Page;
