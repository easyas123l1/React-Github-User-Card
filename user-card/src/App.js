import React, { Component } from 'react';
import Usercard from './components/usercard/Usercard';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: 'easyas123l1',
      user: {},
      friends: []
    }
  }

  fetchAccount = () => {
    axios.get(`https://api.github.com/users/${this.state.profile}`)
    .then(results => {
      console.log(results);
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

  componentDidMount() {
    this.fetchAccount();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ user: {}, friends: [] })
    this.fetchAccount();
  }

  handleChanges = e => {
    this.setState({ profile: e.target.value })
  }

  render() {
    return (
      <div className="App">
        {/* <img src='../assets/lambdalogo.png' /> */}
        <h1>Github:</h1>
        {/* <img src='../assets/githublogo.png' /> */}
        <form className='form'
          onSubmit={this.handleSubmit}>
          <label htmlFor='profile'>Search Github:</label>
          <input type='text'
          name='profile'
          value={this.state.profile}
          onChange={this.handleChanges}
          />
          <button>Search</button>
        </form>
        {this.state.user === {} ? <p>This github handle doesn't exist!</p>
        :
        <div>
          <Usercard user={this.state.user}/>
          <h1>Friends <span aria-label='heart' role='img' >❤️</span>!!!</h1>
        </div>
        }
        {this.state.friends.map(friend => (
          <Usercard user={friend} key={friend} />
        ))}
        
      </div>
    );
  }
}

export default App;
