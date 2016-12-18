import React from 'react';
import {connect} from 'react-redux';
import NewsList from './NewsList';
import * as actions from '../actions';
import * as api from '../api';
import {getList, getIsFetching, getOpts} from '../reducers';
import throttle from 'lodash/throttle';

class NewsMain extends React.Component {
  constructor(props) {
    super(props);
    this.scrollListener = throttle(()=> {
      if (api.getPixelsFromScrollBarToBottom() < 200 && !this.props.isFetching) {
        this.fetchData()
      }
    }, 1000).bind(this);
  }

  componentDidMount() {
    if(!this.props.list.length){
      this.fetchData();
    }
    window.addEventListener('scroll', this.scrollListener, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener, false);
  }

  fetchData() {
    const {fetchNews, requestNews, opts} = this.props;
    requestNews();
    const url = api.generateUrl(opts);
    console.log(url);
    fetchNews(url);
  }

  render() {
    const {list, isFetching} = this.props;

    if (isFetching && !list.length) {
      return <p>Loading...</p>
    }
    return (
      <div>
        <header>
          <h1>News</h1>
        </header>
        <NewsList list={list}/>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  list: getList(state),
  isFetching: getIsFetching(state),
  opts: getOpts(state)
});

NewsMain = connect(
  mapStateToProps,
  actions
)(NewsMain);

export default NewsMain;
