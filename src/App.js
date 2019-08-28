import React from 'react';
import Netflix from './netflix.png';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'mylist' : [
        { 'title': 'Futurama', 'id': 1, 'img': 'http://cdn1.nflximg.net/webp/7621/3787621.webp' },
        { 'title': 'The Interview', 'id': 2, 'img': 'http://cdn1.nflximg.net/webp/1381/11971381.webp' },
        { 'title': 'Gilmore Girls', 'id': 3, 'img': 'http://cdn1.nflximg.net/webp/7451/11317451.webp' }
      ],
      'recommendations' : [
        { 'title': 'Family Guy', 'id': 4, 'img': 'http://cdn5.nflximg.net/webp/5815/2515815.webp' },
        { 'title': 'The Croods', 'id': 5, 'img': 'http://cdn3.nflximg.net/webp/2353/3862353.webp' },
        { 'title': 'Friends', 'id': 6, 'img': 'http://cdn0.nflximg.net/webp/3200/9163200.webp' }
      ]
    }
  }
  // 1. The top row will be the ‘My List’ row and will display the titles included in ‘mylist’ array. -Done!

  // 2. The second row will be the recommendation row which will display the titles included in ‘recommendations’ array. -Done!

  // 3. Hovering over an image in the ‘My List’ row should create a “Remove” button displayed below the image. -Done!

  // 4. Clicking on the button should remove the title from the “My List” row. -Done!

  // 5. Hovering over an image in the recommendations row should create an “Add” button displayed below the image. - Done!

  // 6. Clicking on the button should add the title to the “My List” row. -Done!

  // 7. The list of titles in the “My List” row should be displayed at the bottom of the page.

  handleRemove(index) {
    let mylist = [...this.state.mylist];
    mylist.splice(index, 1);
    this.setState({ mylist });
  }

  handleAdd(item) {
    let mylist = [...this.state.mylist, item ];
    this.setState({ mylist });
  }

  render() {
    const { mylist, recommendations } = this.state;
    if (mylist.length < 1 || recommendations.length < 1) {
      return <div>...Loading</div>;
    }
    return (
      <div className="netflix-mockup">
        <header className="header">
          <img src={Netflix} className="logo" alt="Netflix logo" />
        </header>
        <div className="my-list-row">
          <h1>My List</h1>
          {mylist.map((item, index) => {
            return (
              <div className="content-item" key={item.id}>
                <h4>{item.title}</h4>
                <img src={item.img} alt={item.title} />
                <button onClick={index => this.handleRemove(index)}>remove</button>
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
                <button onClick={() => this.handleAdd(item)}>add</button>
              </div>
            )
          })}
        </div>
        <hr />
        <div className="my-list-titles">
          <h1>My List by Title</h1>
          <ul>
            {mylist.map(item => (<li>{item.title}</li>))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
