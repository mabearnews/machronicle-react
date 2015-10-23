import React from 'react/addons';
import NavBar from './NavBar.js';
import Featured from './Featured.js';

// React components
import ArticleList from './ArticleList.js';

// Alt data flow
import ArticleStore from '../stores/ArticleStore.js';
import ArticleActions from '../actions/ArticleActions.js';

import config from '../../../config/app';

// Get common app debug instance
import debug from '../debug.js';

/*
 * @class Home
 * @extends React.Component
 */
class Home extends React.Component {
  
  constructor(props) {
    super(props);
    // Get state data from articleStore
    this.state = ArticleStore.getState();
    // Fix 'this' in ES6 classes
    // React does not autobind for ES6
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    ArticleStore.listen(this.onChange);
    debug('home mounted');
    ArticleActions.fetchArticles();
  }

  componentWillUnmount() {
    ArticleStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  /*
   * @method render
   * @returns {JSX}
   */
  render () {
    debug(this.state.articles);
    return <div className="appRoot">
      <NavBar />
      <Featured />
      <ArticleList articles={this.state.articles} />
    </div>;
  }
}

export default Home;
