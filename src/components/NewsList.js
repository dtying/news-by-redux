import React from 'react';
import NewsLink from './NewsLink';


const NewsList = ({list}) => (
  <ol className="news-list" >
    {list.map( news => <NewsLink key={news.id} news={news} /> )}
  </ol>
);

export default NewsList;
