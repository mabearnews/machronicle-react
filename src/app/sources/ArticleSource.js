import WP from 'wordpress-rest-api';
// Debug object
// import debug from '../debug.js';

var wp = new WP({ endpoint: 'http://www.machronicle.com/wp-json'});

class ArticleSource {
  fetch () {
    return new Promise(function (resolve, reject) {
      wp.posts().then(function( posts ) {
        // success
        resolve(posts);
      }).catch(function( err ) {
        // Failed
        reject(err);
      });
    });
  }
}

export default new ArticleSource();
