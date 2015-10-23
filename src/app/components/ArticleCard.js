import React from 'react/addons';
import debug from '../debug.js';

import jquery from 'jquery';


/*
 * @class ArticleCard
 * @extends React.Componet
 */
class ArticleCard extends React.Component {

  constructor(props) {
    super(props)
  }

  /*
   * @method render
   * @returns {JSX}
   */
  render (){
    return <div className="panel panel-default">
      <div className="panel-heading">
        <h1 className="panel-title">{this.props.article.title}</h1>
      </div>
      <div className="panel-body">
        {this.props.article.excerpt}
      </div>
    </div>
  }
}

ArticleCard.propTypes = {
  //key: React.PropTypes.number, 
  article: React.PropTypes.object
};
ArticleCard.defaultProps = { article: {} };

export default ArticleCard;

