import React from 'react';
import { connect } from 'react-redux';
import { addContent, removeContent, fetchContent } from './actions';
import Item from './item';
import Netflix from './netflix.png';
import './App.css';

// 1. Class component changed to functional removing use of state and component lifecycle
// 2. Passing all actions & content as props from redux
// 3. Individual content items are now reuseable components
const App = ({ mylist, recommendations, removeContent, addContent, loading }) => {
  console.log(loading);
  if (loading) {
    return <div>...Loading</div>;
  }
  return (
    <div className="netflix-mockup">
      <header className="header">
        <img src={Netflix} className="logo" alt="Netflix logo" />
      </header>
      <div className="my-list-row">
        <h1>My List</h1>
        {mylist.map(item => (
          <Item key={item.id} action={removeContent} item={item} />
        ))}
      </div>
      <hr />
      <div className="recommendation-row">
        <h1>Recommendations</h1>
        {recommendations.map(item => (
          <Item key={item.id} action={addContent} item={item} />
        ))}
      </div>
      <hr />
      <div className="my-list-titles">
        <h1>My List by Title</h1>
        <ul>
          {mylist.map(item => (<li key={item.id}>{item.title}</li>))}
        </ul>
      </div>
    </div>
  )
};


// Map dispatch to props :-)
const mapDispatchToProps = dispatch => ({
  addContent: item => dispatch(addContent(item)),
  removeContent: item => dispatch(removeContent(item)),
  fetchContent: dispatch(fetchContent())
});

// Map state to props :-)
const mapStateToProps = state => ({
  mylist: state.mylist,
  recommendations: state.recommendations,
  loading: state.loading
});

// Connect React & Redux
export default connect(mapStateToProps, mapDispatchToProps)(App);
