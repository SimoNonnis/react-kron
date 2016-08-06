import React from 'react';
import { Link } from 'react-router';

import styles from './home.css';


const Home = () => (
  <div className={styles.container}>
    <header className={styles.header} role="banner" >
      <h1 className={styles.title} >react-kron</h1>
      <p>get users, posts, comments with a simple click</p>
    </header>

    <Link to="/users">
    <button className={styles.button} >Get Users</button>
    </Link>

  </div>
);


export default Home;
