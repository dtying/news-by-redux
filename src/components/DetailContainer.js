import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import * as actions from '../actions';
import {getDetailIsFetching, getDetailIds} from '../reducers';
import DetailPage from './DetailPage';
import Spinner from './Spinner';
import * as api from '../api';

class DetailContainer extends React.Component {

  componentDidMount() {
    const {details, id} = this.props;
    if (!details[id]) {
      this.fetchData();
    }
  }

  fetchData() {
    const {fetchDetails, id} = this.props;
    const opts = {path: id, show: 'all'};
    const url = api.generateUrl(opts);
    console.log(url);
    fetchDetails(url);
  }

  render() {
    const {details, id, isFetching} = this.props;
    const news = details[id];

    if (!news || isFetching) {
      return <Spinner />
    }


    return (
      <div>
        <DetailPage news={news} />
      </div>
    );
  }
}

const mapStateToProps = (state, {params}) => ({
  details: getDetailIds(state),
  id: params.splat,
  isFetching: getDetailIsFetching(state)
});

DetailContainer = withRouter(connect(
  mapStateToProps,
  actions
)(DetailContainer));

export default DetailContainer;
