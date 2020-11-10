import React, { Component } from 'react';
import UsersList from "./UsersList";


class MovieInfo extends Component{
  
  render(){
    const { users, usersByMovie, movieInfo } = this.props;
   
    return (
      <li key={movieInfo.id}>
        <h2>{movieInfo.name}</h2>
        <h3>Liked By:</h3>
		<UsersList usersByMovie={usersByMovie} users={users} />
      </li>
    );
  
  
  }
}

export default MovieInfo;