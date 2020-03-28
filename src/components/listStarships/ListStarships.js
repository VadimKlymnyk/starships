import React from "react";
import Starship from "./Starship";

const ListStarships = ({ list }) => {
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
        </tr>
      </thead>
      <tbody>
        {list.map(starship => (
          <Starship starship={starship} key={starship.url} />
        ))}
      </tbody>
    </table>
  );
};
export default ListStarships;
