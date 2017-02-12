import React from 'react';
import SearchBox from './SearchBox';
import {Link} from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/news-by-redux-demo">
            <h1>News</h1>
          </Link>
          <SearchBox />
        </header>
        {this.props.children}
      </div>
    );
  }
}

export default App;
