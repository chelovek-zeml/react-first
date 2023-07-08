import { Field, reduxForm } from "redux-form";
import s from "./my-posts.module.css";
import Post from "./post/post";
import React from "react";

function MyPosts(props) {
  let postsElement = props.posts.map((p) => (
    <Post key={p.id} message={p.message} countLike={p.likesCount} avatar={p.avatar} />
  ));


  const onSubmit = (values) => {
    props.addNewPost(values.newPost);
        }

  return (
    <div className={s.wrapper_post}>
      <span>My Posts</span>
     <MyPostsReduxForm onSubmit={onSubmit} />
      {postsElement}
    </div>
  );
}

const MyPostsForm = (props) => {
  return (   
      <form className={s.new_post} onSubmit={props.handleSubmit}>
        <div>
        <Field component={"textarea"}
         name={"newPost"}
         placeholder="add your post"
        />
        </div>
        <div>
          <button>Add post</button>
        </div>
      </form>
  );
}

const MyPostsReduxForm = reduxForm({
  form: "AddPost",
})(MyPostsForm);
export default MyPosts;
