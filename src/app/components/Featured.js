import React from 'react/addons';

/*
 *  @class Featured
 *  @extends React.Component
 */
class Featured extends React.Component {
  
  /*
   * @method render
   * @returns {JSX}
   */
  render () {
    // A set of four featured articles is passed in as "articles"
   var featuredArr = this.props.articles;

   return <div className="jumbotron">
   <h1>Featured Articles go Here</h1>
   <p>This will be much more interesting in the future:wq</p>
   </div>

  }
}

export default Featured
