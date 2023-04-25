import React from "react";
import {
  addPostActionCreater,
  updateNewPostTextActionCreater,
} from "../../../../redux/profile-reduce";
import MyPosts from "./my-posts";

function MyPostsContainer(props) {
  debugger
  let state = props.store.getState();

  let addNewPost = () => {
    let action = addPostActionCreater();
    props.store.dispatch(action);
  };

  let onChangePost = (text) => {
    let action = updateNewPostTextActionCreater(text);
    props.store.dispatch(action);
  };

  return <MyPosts updateNewPostText={onChangePost} addNewPost={addNewPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />;
}

export default MyPostsContainer;
