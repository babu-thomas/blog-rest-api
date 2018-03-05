import React, { Component } from 'react';

class App extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('https://backend-rkvgfflfnf.now.sh/api/');
      const posts = await res.json();
      this.setState({
        posts
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.posts.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <span>{item.contents}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;