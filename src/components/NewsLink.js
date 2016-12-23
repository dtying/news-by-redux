import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {getReadById} from '../reducers';
import * as actions from '../actions';

class NewsLink extends React.Component {
  render() {
    const {news, toggleNews, isRead} = this.props;
    return (
      <li key={news.id} onClick={()=>toggleNews(news.id)}>
        <Link to={'details/' + news.id}
              style={{color: '#000'}}>
          <h4 style={{color: isRead ? '#038543' : '#000'}}>{news.webTitle}</h4>
        </Link>
        <p>{news.sectionName}</p>
      </li>
    );
  }
}

const mapStateToProps = (state, {news}) => ({
  isRead: getReadById(state, news.id)
});

NewsLink = connect(
  mapStateToProps,
  actions
)(NewsLink);


export default NewsLink;
