import React from 'react';
import { connect } from 'react-redux';
import { addContent, removeContent } from './actions';
import Netflix from './netflix.png';
import './App.css';

const App = props => {
  const { mylist, recommendations } = props;
  return (
    <div className="netflix-mockup">
      <header className="header">
        <img src={Netflix} className="logo" alt="Netflix logo" />
      </header>
      <div className="my-list-row">
        <h1>My List</h1>
        {mylist.map(item => {
          return (
            <div className="content-item" key={item.id}>
              <h4>{item.title}</h4>
              <img src={item.img} alt={item.title} />
              <button onClick={() => props.removeContent(item)}>remove</button>
            </div>
          )
        })}
      </div>
      <hr />
      <div className="recommendation-row">
        <h1>Recommendations</h1>
        {recommendations.map(item => {
          return (
            <div className="content-item" key={item.id}>
              <h4>{item.title}</h4>
              <img src={item.img} alt={item.title} />
              <button onClick={() => props.addContent(item)}>add</button>
            </div>
          )
        })}
      </div>
      <hr />
      <div className="my-list-titles">
        <h1>My List by Title</h1>
        <ul>
          {mylist.map(item => (<li key={item.id}>{item.title}</li>))}
        </ul>
      </div>
    </div>
  );
}

// Map dispatch to props :-)
const mapDispatchToProps = dispatch => ({
  addContent: item => dispatch(addContent(item)),
  removeContent: item => dispatch(removeContent(item))
});

// Map state to props :-)
const mapStateToProps = state => ({
  mylist: state.mylist,
  recommendations: state.recommendations
});

// Connect React & Redux
export default connect(mapStateToProps, mapDispatchToProps)(App);
