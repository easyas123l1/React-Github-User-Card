import React, { Component } from 'react';
import Usercard from './components/usercard/Usercard';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      friends: []
    }
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/easyas123l1`)
    .then(results => {
      this.setState({ user: results.data})
      return results.data.followers_url
    })
    .then(results2 => {
      return axios.get(results2);
    })
    .then(results3 => {
      results3.data.forEach(friend => {
        axios.get(friend.url)
        .then(results4 => {
          this.setState({ friends: [...this.state.friends, results4.data]})
          console.log(this.state.friends);
        })
      })
    }) 
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My Github:<span role='img' >❤️</span>'s</h1>
        <Usercard user={this.state.user}/>
        <h1>Friends!</h1>
      </div>
    );
  }
}

export default App;
