import MyPostsContainer from "./myPosts/my-posts-container";
import ProfileInfo from "./profileInfo/profile-info";

function Profile(props) {
  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
      <MyPostsContainer />
    </div>
  );
}

export default Profile;
