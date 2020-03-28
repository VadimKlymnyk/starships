import React, { useEffect, useState } from "react";
import ListStarships from "./ListStarships";
import Pagination from "./Paginations";
import SearchByName from "./Search"
import { useParams } from "react-router-dom";

const Page = ({ props }) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    props.getPosts(currentPage);
  }, [currentPage]);

  async function Search(body) {
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
export default Page;
