import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as requests from "../requests/Requests";
import { connect } from "react-redux";

function ViewStarship(props) {
  //console.log(Object.values(props.starship));
  let click = useParams();

  useEffect(() => {
    props.getPost(click.id);
  }, [click.id]);

  return (
    <div>
      {!props.loading ? (
        <table className="table">
          <thead className="thead-dark">
            <h1>{`Starship ${click.id}`}</h1>
            <tr>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(props.starship).map(item => (
              <tr>
                <th scope="row">{item}</th>
                <td>{props.starship[item]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
}

const mapStateToProps = ({ starship }) => {
  return {
    starship: starship.data,
    loading: starship.loading
    //id: post.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPost: id => {
      requests.one(dispatch, id);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewStarship);
