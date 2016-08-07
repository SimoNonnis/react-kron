import React from 'react';

import styles from './app.css';


class App extends React.Component {
  render () {
    return (
      <div className={styles.container} >
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default App;
