import React, { Component } from 'react';

class Usercard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img />
        <div>
          <h3>Name: {this.props.user.name}</h3>
          <p>Username: {this.props.user.login}</p>
          <p>Location: {this.props.user.location}</p>
          <p>Profile: <a href={this.props.user.html_url}>{this.props.user.html_url}</a></p>
          <p>Followers: {this.props.user.followers}</p>
          <p>Following: {this.props.user.following}</p>
          <p>Bio: {this.props.user.bio}</p>
        </div>
      </div>
    )
  }
}

export default Usercard;