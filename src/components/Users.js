import React from 'react';
import { Link } from 'react-router';

import { rootUrl } from '../constants/constants.js';

import styles from './users.css';


class Users extends React.Component {
  constructor() {
      super();
      this.state = {
        users: []
      }
  }

  componentWillMount () {
    this.getUsers();
  }

  getUsers (users = 'users') {
    var url = rootUrl + users;

    fetch(url)
      .then(response => response.json())
      .then(result => {
        this.setState({
          users: result
        });
      })
  }

  render () {
    var { users } = this.state;

    return (
      <div>
        <h1 className={styles.title} >Users List</h1>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tableHeader}>
              <th>id</th>
              <th>name</th>
              <th>username</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={ user.id } >
                  <td>{ user.id }</td>
                  <td><Link to={'/posts/' + user.id}>{ user.name }</Link></td>
                  <td>{ user.username }</td>
                  <td>{ user.email }</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}



Users.propTypes = {
  users: React.PropTypes.array
};


export default Users;
