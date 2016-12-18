import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import * as actions from '../actions';
import {getDetailIsFetching, getDetailIds} from '../reducers';
import Detail from './Detail';
import * as api from '../api';

class NewsDetail extends React.Component {

  componentDidMount() {
    const {details, id} = this.props;
    if (!details[id]) {
      this.fetchData();
    }
  }

  fetchData() {
    const {requestDetails, fetchDetails, id} = this.props;
    requestDetails();
    const opts = {path: id, show: 'all'};
    const url = api.generateUrl(opts);
    console.log(url);
    fetchDetails(url);
  }

  render() {
    const {details, id, isFetching} = this.props;
    const news = details[id];
    
    if (!news || isFetching) {
      return <p>Loading...</p>
    }

    return (
      <div>
        <Detail news={news} />
      </div>
    );
  }
}

const mapStateToProps = (state, {params}) => ({
  details: getDetailIds(state),
  id: params.splat,
  isFetching: getDetailIsFetching(state)
});

NewsDetail = withRouter(connect(
  mapStateToProps,
  actions
)(NewsDetail));

export default NewsDetail;
