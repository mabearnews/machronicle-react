import React from 'react/addons';
import NavBar from './NavBar.js';
import Featured from './Featured.js';

import config from '../../../config/app';

/*
 * @class Home
 * @extends React.Component
 */
class Home extends React.Component {

  /*
   * @method render
   * @returns {JSX}
   */
  render () {
    return <div className="appRoot">
      <NavBar />
      <Featured />
    </div>;
  }
}

// Prop types validation
Home.propTypes = {
  state: React.PropTypes.object.isRequired,
};

export default Home;
