import React, { Component } from 'react';

class Usercard extends Component {
  render() {
    return (
      <div className='card'>
        <img src={this.props.user.avatar_url} alt={`${this.props.user.name}`}/>
        <div className='card-info'>
          <h3 className='name'>Name: {this.props.user.name}</h3>
          <p className='username'>Username: {this.props.user.login}</p>
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