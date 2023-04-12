import s from "./my-posts.module.css";
import Post from "./post/post";

function MyPosts(props) {
 

  let postsElement = props.posts.map( p => <Post message={p.message} countLike={p.likesCount} />)

  return (
    <div className={s.wrapper_post}>
      <span>My Posts</span>
      <div className={s.new_post}>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
     { postsElement }
    </div>
  );
}

export default MyPosts;
