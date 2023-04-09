import s from "./profile-info.module.css";
import foto from "../../../assets/wallpaperflare.com_wallpaper.jpg"

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.img_montane}>
        <img src={foto} alt="img"></img>
      </div>
      <div>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
