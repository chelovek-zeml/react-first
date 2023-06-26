import { compose } from "redux";
import {
  addNewPost,
  updateNewPostText,
} from "../../../../redux/profile-reducer";
import MyPosts from "./my-posts";
import { connect } from "react-redux";

// function MyPostsContainer(props) {
//   debugger
//   let state = props.store.getState();

//   let addNewPost = () => {
//     let action = addPostActionCreater();
//     props.store.dispatch(action);
//   };

//   let onChangePost = (text) => {
//     let action = updateNewPostTextActionCreater(text);
//     props.store.dispatch(action);
//   };

//   return <MyPosts updateNewPostText={onChangePost} addNewPost={addNewPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />;
// }

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts,
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     updateNewPostText: (text) => {
//       dispatch(updateNewPostTextActionCreater(text));
//     },
//     addNewPost: () => {
//       dispatch(addPostActionCreater());
//     },
//   };
// };

// const MyPostsContainer = connect(mapStateToProps, {
//   updateNewPostText,
//   addNewPost,
// })(MyPosts);

// export default MyPostsContainer;

export default compose(connect(mapStateToProps, {
     updateNewPostText,
     addNewPost,
   }))(MyPosts);
