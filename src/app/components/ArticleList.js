import React from 'react/addons';
import debug from '../debug.js';

import ArticleStore from '../stores/ArticleStore.js';

import ArticleCard from '../components/ArticleCard.js';

/*
 * @class ArticleList
 * @extends React.Component
 */
class ArticleList extends React.Component {
  
  constructor(props){
    super(props);
  }

  /*
   * @method render
   * @returns {JSX}
   */
  render () {
    return <div className="container">
      <div className="row">
          {this.props.articles.map(function(article) {
            // debug("ID: " + article.ID);
            return <div className="col-md-4">  
              <ArticleCard key={article.ID} article={article} />
            </div>
          })}
      </div>
    </div>
  }
}

ArticleList.propTypes = {articles:  React.PropTypes.array};
ArticleList.defaultProps = { articles: [] };

export default ArticleList;

