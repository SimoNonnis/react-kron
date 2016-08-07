import React from 'react';
//import { Link } from 'react-router';

import styles from './users.css';

const Users = ({users}) => (
  <div className={styles.container}>
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
              <td>{ user.name }</td>
              <td>{ user.username }</td>
              <td>{ user.email }</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);



Users.propTypes = {
  users: React.PropTypes.array
};


export default Users;
