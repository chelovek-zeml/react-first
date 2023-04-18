import MyPosts from "./myPosts/my-posts";
import ProfileInfo from "./profileInfo/profile-info";

function Profile(props) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={props.state.posts}
        newPostText={props.state.newPostText}
        addPost={props.addPost}
        updateNewPost={props.updateNewPost}
      />
    </div>
  );
}

export default Profile;
