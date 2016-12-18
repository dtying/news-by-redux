import React from 'react';
import {Link} from 'react-router';

const NewsLink = ({news}) =>
<li key={news.id}>
  <Link to={'details/' + news.id} style={{color: '#000'}}>
    <h2>{news.webTitle}</h2>
  </Link>
  <p>{news.sectionName}</p>
</li>;


export default NewsLink;
