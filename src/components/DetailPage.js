import React from 'react';

const DetailPage = ({news}) => (
  <div className="detail-wrapper">
    <div className="detail">
      <h2>{news.webTitle}</h2>
      <img src={news.fields.thumbnail}/>
      <p>{news.fields.bodyText}</p>
    </div>
  </div>
);

export default DetailPage;
