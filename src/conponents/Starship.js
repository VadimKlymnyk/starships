import React from "react";
import { withRouter, Link, useParams } from "react-router-dom";

const Starship = ({ starship }) => {
  let id = starship.url.slice(20, -1);

  return (
    <tr>
      <th scope="row">•</th>

      <td>
        <Link to={id}>{starship.name}</Link>
      </td>
    </tr>
  );
};
export default withRouter(Starship);
