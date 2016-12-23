import React from 'react';

const LoadingBox = ({isFetching}) => {
  const styleObj = {
    width: '100%',
    height: '100px',
    textAlign: 'center',
    backgroundColor: '#f5f8fa',
    paddingTop: '100px'
  };

  return (
    <div style={styleObj}>
      {isFetching && 'Loading...'}
  </div>);
};



export default LoadingBox;
