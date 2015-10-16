import React from 'react/addons';
import Debug from 'debug';
import Router from 'react-router';

var Route = Router.Route;


import Home from './components/Home';

var debug = Debug('myApp');

debug(Router);
debug(Route);


/*
 * @class App
 */
class App {

  /*
   * @method render
   * @param {DOM} [element]
   * @returns {String|undefined}
   */
   render (element) {

    debug('render app with state', this.state);

    // render to DOM
    if(element) {
      debug('render to DOM');

      var routevar = (
        <Route handler={Home}>
        </Route>
      );
      
      Router.run(routevar, Router.HashLocation, (Root) => {
        React.render(<Root/>, element);
      });
      debug('after');
      return;
    }

    // render to string
    debug('render to string');
    return React.renderToString(appRootElement);
  }

  /*
   * @method render
   * @param {DOM} element
   */
   renderToDOM (element) {
    if(!element) {
      return debug(new Error('App.renderToDOM: element is required'));
    }
    this.render(element);
   }

  /*
   * @method renderToString
   * @returns {String}
   */
   renderToString () {
    return this.render();
  }
}

export default App;
