import React from 'react/addons';

/*
 * @class NavBar
 * @extends React.Component
 */

class NavBar extends React.Component {

  /*
   * @method render
   * @returns {JSX}
   */

  render () {
    return <nav className="navbar navbar-default">
    <div className="container-fluid">

    {/* Name and toggle grouped */}
    <div className="navbar-header">
    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
    <span className="sr-only">Toggle navigation</span>
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>
    </button>
    <a className="navbar-brand" href="#">M-A Chronicle</a>

    </div>

    {/* Collect the nav links, forms, and other content for toggling */} 
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    <ul className="nav navbar-nav">
      <li><a href="#features">Features</a></li>
      <li><a href="#news">News</a></li>
      <li><a href="#blogs">Blogs</a></li>
      <li><a href="#opinion">Opinion</a></li>
      { /* Must fix jquery for dropdown to work */}
      <li className="dropdown">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">More<span className="caret"></span></a>
        <ul className="dropdown-menu">
            <li><a href="#">More Catagories here</a></li>
            <li><a href="#">And here</a></li>
        </ul>
      </li>

    </ul>
    </div>


    </div> 
    </nav>;
  }
}

export default NavBar;
