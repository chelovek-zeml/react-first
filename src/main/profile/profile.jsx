import MyPosts from "./myPosts/my-posts";
import ProfileInfo from "./profileInfo/profile-info";

function Profile(props) {
    return (
      <div>
        <ProfileInfo/>
        <MyPosts posts={props.posts}/>
      </div>
    );
  }
  
  export default Profile;