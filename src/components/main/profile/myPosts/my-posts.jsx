import s from "./my-posts.module.css";
import Post from "./post/post";
import React from "react";

function MyPosts(props) {
 

  let postsElement = props.posts.map( p => <Post message={p.message} countLike={p.likesCount} avatar={p.avatar}/>);
  let newPostElement = React.createRef();

  let addNewPost = () => {
    debugger
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = "";
  }

  return (
    <div className={s.wrapper_post}>
      <span>My Posts</span>
      <div className={s.new_post}>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addNewPost}>Add post</button>
        </div>
      </div>
     { postsElement }
    </div>
  );
}

export default MyPosts;
