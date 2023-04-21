import MyPosts from "./myPosts/my-posts";
import ProfileInfo from "./profileInfo/profile-info";

function Profile(props) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={props.state.posts}
        newPostText={props.state.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
}

export default Profile;
