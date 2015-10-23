// Use app alt instance
import alt from '../alt.js';

// Get common app debug instance
import debug from '../debug.js';

import ArticleSource from '../sources/ArticleSource.js';

class ArticleActions {

  updateArticles(articles) {
    this.dispatch(articles);
  }

  fetchArticles() {
    debug('Fetch started');
    ArticleSource.fetch()
    .then((articles) => {
      debug(articles);
      this.actions.updateArticles(articles);
    })
    .catch((errorMessege) => {
      this.actions.articlesFailed(errorMessege); 
    });
    this.dispatch();
  }

  articlesFailed(errorMessege) {
    this.dispatch(errorMessege);
  }

}

export default alt.createActions(ArticleActions);
 
