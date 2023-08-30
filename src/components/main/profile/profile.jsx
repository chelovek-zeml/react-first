import MyPostsContainer from "./myPosts/my-posts-container";
import ProfileInfo from "./profileInfo/profile-info";

function Profile(props) {
  return (
    <div>
      <ProfileInfo
        savePhoto={props.savePhoto}
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        saveProfile={props.saveProfile}
      />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;
