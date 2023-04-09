import MyPosts from "./myPosts/my-posts";
import ProfileInfo from "./profileInfo/profile-info";

function Profile() {
    return (
      <div>
        <ProfileInfo/>
        <MyPosts/>
      </div>
    );
  }
  
  export default Profile;