import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Pagination = ({ paginate, count }) => {
  const pageNumbers = [];
  
  for (let i = 1; i <= 1+(count/10); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <Link
              to={`?page=${number}`}
              onClick={() => paginate(number)}
              className="page-link"
            >
              <span>{number}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
