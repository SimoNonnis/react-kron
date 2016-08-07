import React from 'react';
//import { Router, Route, browserHistory } from 'react-router';

import { rootUrl } from '../constants/constants.js';
//import Home from './Home';
//import Users from './Users';
//import Posts from './Posts';
import Comments from './Comments';
//import NoMatch from './NoMatch';

import styles from './app.css';




class App extends React.Component {
  constructor() {
      super();
      this.state = {
        users: [],
        posts: [],
        comments: []
      }
  }

  componentWillMount () {
    this.getUsers();
    this.getPosts();
    this.getComments();
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

  getPosts (id = 1) {
    var url = `${rootUrl}posts?userId=${id}`;

    fetch(url)
      .then(response => response.json())
      .then(result => {
        this.setState({
          posts: result
        });
      })
  }

  getComments (id = 1) {
    var url = `${rootUrl}comments?postId=${id}`;

    fetch(url)
      .then(response => response.json())
      .then(result => {
        this.setState({
          comments: result
        });
      })
  }

  render () {
    return (
      <div className={styles.container} >
        {/* <Home /> */}
        {/* <Users users={this.state.users} /> */}
        {/* <Posts posts={this.state.posts} /> */}
        <Comments comments={this.state.comments} />

        {/* <Router history={browserHistory}>
          <Route path="/" component={Home} />
          <Route path="/users" users={this.state.users} component={Users} />
        </Router>; */}
      </div>
    );
  }
}

export default App;
