import MyPostsContainer from "./myPosts/my-posts-container";
import ProfileInfo from "./profileInfo/profile-info";

function Profile(props) {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  );
}

export default Profile;
