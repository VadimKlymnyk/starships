import React from "react";
import Starship from "./Starship";

const ListStarships = ({ lists }) => {
  return (
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Model</th>
        </tr>
      </thead>
      <tbody>
        {lists.map(list => (
          <Starship list={list} key={list.id} />
        ))}
      </tbody>
    </table>
  );
};
export default ListStarships;
