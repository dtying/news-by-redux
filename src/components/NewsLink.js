import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {getReadById, getIsFavouriteById} from '../reducers';
import * as actions from '../actions';

class NewsLink extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const {news, toggleNews, isRead, toggleFavourite, isFavourite} = this.props;
    return (
      <li key={news.id}>
        <Link to={`/details/${news.id}`} style={{color: '#000'}} onClick={()=>toggleNews(news.id)}>
          <h4 style={{color: isRead ? '#038543' : '#000'}}>{news.webTitle}</h4>
        </Link>
        <span className="tag-name">{news.sectionName}</span>
        <span className="favourite" onClick={() => toggleFavourite(news.id)} style={{color: isFavourite ? '#FF1493' : '#000'}}>&hearts;</span>
      </li>
    );
  }
}

const mapStateToProps = (state, {news}) => ({
  isRead: getReadById(state, news.id),
  isFavourite: getIsFavouriteById(state, news.id)
});

NewsLink = connect(
  mapStateToProps,
  actions
)(NewsLink);


export default NewsLink;
