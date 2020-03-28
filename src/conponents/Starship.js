import React from "react";

const Starship = ({ list }) => {
    //console.log(list)

  return (
    <tr>
      <th scope="row">1</th>
      <td>{list.name}</td>
      <td>{list.model}</td>
    </tr>
  );
};
export default Starship;
