import s from "./my-posts.module.css";
import Post from "./post/post";
import React from "react";

function MyPosts(props) {
  let postsElement = props.posts.map((p) => (
    <Post key={p.id} message={p.message} countLike={p.likesCount} avatar={p.avatar} />
  ));
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addNewPost();
  };

  let onChangePost = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.wrapper_post}>
      <span>My Posts</span>
      <div className={s.new_post}>
        <div>
          <textarea
            onChange={onChangePost}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      {postsElement}
    </div>
  );
}

export default MyPosts;
