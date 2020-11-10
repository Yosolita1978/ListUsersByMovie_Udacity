import React, { Component } from 'react';
import MovieInfo from "./MovieInfo";


class Dashboard extends Component{
  
  render() {
   
    const { usersByMovie, users, movies } = this.props;

    const movieCards = Object.keys(movies).map(id => (
      <MovieInfo
        key={id}
        users={users}
        usersByMovie={usersByMovie[id]}
        movieInfo={movies[id]}
      />
    ));

    return <ul>{movieCards}</ul>;
  }
}

export default Dashboard;