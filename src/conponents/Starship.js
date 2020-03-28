import React from "react";

const Starship = ({ starship }) => {
    //console.log(list)

  return (
    <tr>
      <th scope="row">1</th>
      <td>{starship.name}</td>
      <td>{starship.model}</td>
    </tr>
  );
};
export default Starship;
