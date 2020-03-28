import React, { useState } from "react";

function SearchByName({ onCreate }) {
  const [value, setValue] = useState("");

  function Search(event) {
    event.preventDefault();

    if (value.trim()) {
    console.log(value)
      onCreate(value);
      setValue("");
    }
  }

  return (
    <form className="form-inline" onSubmit={Search}>
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search by Name
      </button>
    </form>
  );
}

export default SearchByName;
