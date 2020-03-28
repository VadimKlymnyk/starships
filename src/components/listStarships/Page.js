import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ListStarships from "./ListStarships";
import * as requests from "../../requests/Requests";
import Pagination from "../pagination/Paginations";
import SearchByName from "../search/Search";
import { useParams } from "react-router-dom";
import Loading from "../Loader/Loading";

const Page = ( props ) => {
  console.log(props)
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    props.getPosts(currentPage, null);
  }, [currentPage]);

  function Search(body) {
    props.getPosts(null, body);
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
        <Loading/>
      )}
    </div>
  );
};


const mapStateToProps = ({ list }) => {
  return {
    list: list.data,
    loading: list.loading,
    count: list.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: (page, name) => {
      requests.getListStarships(dispatch, page, name);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);

