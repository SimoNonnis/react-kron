import React from 'react';

import { rootUrl } from '../constants/constants.js';

import styles from './comments.css';


class Comments extends React.Component {
  constructor() {
      super();
      this.state = {
        comments: []
      }
  }

  componentWillMount () {
    this.getComments();
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
    var { comments } = this.state;

    return (
      <div>
        <h1 className={styles.title} >Comments List</h1>
        {comments.map((comment) => {
          return (
            <div className={styles.comment} key={ comment.id } >
              <header className={styles.header} >
                <span className={styles.header__item}>Comment id: { comment.id }</span>
                <span className={styles.header__item}>Post id: { comment.postId }</span>
              </header>

              <p className={styles.body} >{ comment.body }</p>
            </div>
          );
        })}
      </div>
    )
  }
}

Comments.propTypes = {
  comments: React.PropTypes.array
};

export default Comments;
