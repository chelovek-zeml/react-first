import { compose } from "redux";
import {
  addNewPost,
} from "../../../../redux/profile-reducer";
import MyPosts from "./my-posts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts,
  };
};


export default compose(connect(mapStateToProps, {
     addNewPost,
   }))(MyPosts);
