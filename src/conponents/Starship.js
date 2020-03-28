import React from "react";
import { withRouter, Link } from "react-router-dom";

const Starship = ({ starship }) => {
    let id = starship.url.slice(20,-1);
  //console.log(id);
  return (
    <tr>
      <Link to={id}>
        <th scope="row">•</th>
        <td>{starship.name}</td>
        <td>{starship.model}</td>
      </Link>
    </tr>
  );
};
export default withRouter(Starship);
