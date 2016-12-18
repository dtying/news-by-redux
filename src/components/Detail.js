import React from 'react';

const Detail = ({news}) => (
  <div className="detail">
    <h2>{news.webTitle}</h2>
    <img src={news.fields.thumbnail}/>
    <p>{news.fields.bodyText}</p>
  </div>
);

export default Detail;
