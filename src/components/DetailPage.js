import React from 'react';

const DetailPage = ({news}) => (
  <div className="detail-wrapper">
    <div className="detail">
      <h3>{news.webTitle}</h3>
      <img src={news.fields.thumbnail}/>
      <p>{news.fields.bodyText}</p>
    </div>
  </div>
);

export default DetailPage;
