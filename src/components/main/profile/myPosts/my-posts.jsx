import s from "./my-posts.module.css";
import Post from "./post/post";
import React from "react";

function MyPosts(props) {
  let postsElement = props.posts.map((p) => (
    <Post message={p.message} countLike={p.likesCount} avatar={p.avatar} />
  ));
  let newPostElement = React.createRef();

  let addNewPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPost(text);
  };

  return (
    <div className={s.wrapper_post}>
      <span>My Posts</span>
      <div className={s.new_post}>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addNewPost}>Add post</button>
        </div>
      </div>
      {postsElement}
    </div>
  );
}

export default MyPosts;
