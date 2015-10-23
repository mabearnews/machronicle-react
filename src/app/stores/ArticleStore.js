// use app alt instance
import alt from '../alt.js';

import ArticleActions from '../actions/ArticleActions.js';


class ArticleStore {
  constructor() {
    this.articles = [];
    this.errorMessage = null;
    this.bindListeners({
      handleUpdateArticles: ArticleActions.UPDATE_ARTICLES,
      handleFetchArticles: ArticleActions.FETCH_ARTICLES,
      handleArticlesFailed: ArticleActions.ARTICLES_FAILED
    });
  }

  handleUpdateArticles(articles) {
    this.articles = articles;
    this.errorMessage = null;
  }

  handleFetchArticles() {
    //reset array while fetching new articles
    this.articles = [];
  }

  handleArticlesFailed() {
    // Bind error messege
    this.errorMessage = null;
  }
}

export default alt.createStore(ArticleStore, 'ArticleStore');
 
