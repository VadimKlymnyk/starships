import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import * as requests from "../../requests/Requests";
import { connect } from "react-redux";
import Loading from "../Loader/Loading";

function ViewStarship(props) {
  let click = useParams();

  useEffect(() => {
    props.getPost(click.id);
  }, [click.id]);

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <h1>{`Starship ${click.id}`}</h1>
          <tr>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
      </table>
      {!props.loading ? (
        <table>
          <tbody>
            {Object.keys(props.starship).map(item => (
              <tr key={item}>
                <th scope="row">{item}</th>
                <td>{props.starship[item]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Loading />
      )}
    </div>
  );
}

const mapStateToProps = ({ starship }) => {
  return {
    starship: starship.data,
    loading: starship.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPost: id => {
      requests.getOneStarships(dispatch, id);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewStarship);
