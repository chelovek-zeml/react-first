import s from "./profile.module.css";
import foto from "../../assets/wallpaperflare.com_wallpaper.jpg"
import MyPosts from "./myPosts/my-posts";

function Profile() {
    return (
      <div>
        <div className={s.img_montane}><img src={foto}></img></div>
        <div>ava + description</div>
        <MyPosts/>
      </div>
    );
  }
  
  export default Profile;