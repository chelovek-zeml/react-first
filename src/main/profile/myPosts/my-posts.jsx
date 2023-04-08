import s from "./my-posts.module.css";
import Post from "./post/post";

function MyPosts() {
  return (
    <div className={s.wrapper_post}>
      <span>My Posts</span>
      <div className={s.new_post}>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <Post message="Hi, how are you?" countLike="6"/>
      <Post message="It's my first post" countLike="23"/>
      <Post message="Cool" countLike="2"/>
      <Post message="Thanks" countLike="56"/>
    </div>
  );
}

export default MyPosts;
