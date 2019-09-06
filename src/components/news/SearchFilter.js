import React, { useContext, useRef, useEffect } from 'react';
import './SearchFilter.scss';

import NewsContext from '../../context/news/newsContext';

const SearchFilter = () => {
  const newsContext = useContext(NewsContext);
  const text = useRef('');
  const { filterNews, clearFilter, filtered } = newsContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onCnange = e => {
    if (text.current.value !== '') {
      filterNews(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <div className="search">
      <form>
        <input
          className="search-input"
          type="text"
          ref={text}
          placeholder="Search News"
          onChange={onCnange}
        />
      </form>
    </div>
  );
};

export default SearchFilter;
