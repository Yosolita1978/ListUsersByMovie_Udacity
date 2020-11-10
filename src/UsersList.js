import React, { Component } from "react";

class UsersList extends Component {
  render() {
    
    const { users, usersByMovie } = this.props;

    if (!usersByMovie || usersByMovie.length === 0) {
      return <p>None of the current users liked this movie.</p>;
    }

    const listofUsers = usersByMovie.map(id => (
      <li key={id}>
        <p>{users[id].name}</p>
      </li>
    ));

    return <ul>{listofUsers}</ul>;
  }
}

export default UsersList;