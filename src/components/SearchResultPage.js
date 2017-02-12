import React from 'react';
import {Link} from 'react-router';

const SearchResultPage = ({query, results}) => {
  return (
    <div className="search-result">
      <h5>Search Results of '{query}'</h5>
      <ul>
        {results.map((item) =>
          <li key={item.id}>
            <Link to={`/details/${item.id}`}>
              {item.webTitle}
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SearchResultPage;
