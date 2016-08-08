import React from 'react';
import { Link } from 'react-router';

import { rootUrl } from '../constants/constants.js';

import styles from './posts.css';


class Posts extends React.Component {
  constructor() {
      super();
      this.state = {
        posts: []
      }
  }

  componentWillMount () {
    this.getPosts(this.props.params.userId);
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

  render () {
    var { posts } = this.state;

    return (
      <div>
        <h1 className={styles.title} >Posts List</h1>
        {posts.map((post) => {
          return (
            <div className={styles.post} key={ post.id } >
              <header className={styles.header} >
                <span className={styles.header__item}>Post id: { post.id }</span>
                <span className={styles.header__item}>User id: { post.userId }</span>
                <p className={styles.postTitle}>
                  <Link to={'/comments/' + post.id}>{ post.title }</Link>
                </p>
              </header>

              <p className={styles.body} >{ post.body }</p>
            </div>
          );
        })}
      </div>
    )
  }
}



Posts.propTypes = {
  params: React.PropTypes.object,
  posts: React.PropTypes.array
};


export default Posts;
