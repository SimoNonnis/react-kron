import React from 'react';

import styles from './comments.css';

const Comments = ({comments}) => (
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
);

Comments.propTypes = {
  comments: React.PropTypes.array
};

export default Comments;
