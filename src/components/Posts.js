import React from 'react';

import styles from './posts.css';



const Posts = ({posts}) => (
  <div>
    <h1 className={styles.title} >Posts List</h1>

        {posts.map((post) => {
          return (
            <div className={styles.post} key={ post.id } >
              <header className={styles.header} >
                <span className={styles.header__item}>Post id: { post.id }</span>
                <span className={styles.header__item}>User id: { post.userId }</span>
                <p className={styles.postTitle}>{ post.title }</p>
              </header>

              <p className={styles.body} >{ post.body }</p>
            </div>
          );
        })}

  </div>
);



Posts.propTypes = {
  posts: React.PropTypes.array
};


export default Posts;
