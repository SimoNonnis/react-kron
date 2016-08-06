import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Home from './Home';
import Users from './Users';
//import NoMatch from './NoMatch';

import styles from './app.css';




class App extends React.Component {
  constructor() {
      super();
      this.state = {
        users: []
      }
  }

  componentDidMount () {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(result => {
        this.setState({
          users: result
        });
      })
  }

  render () {
    return (
      <div className={styles.container} >
        {/* <Users users={this.state.users} /> */}

        <Router history={browserHistory}>
          <Route path="/" component={Home} />
          <Route path="/users" users={this.state.users} component={Users} />
        </Router>;
      </div>
    );
  }
}

export default App;
