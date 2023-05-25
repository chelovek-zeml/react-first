import s from "./profile-info.module.css";
import foto from "../../../../assets/wallpaperflare.com_wallpaper.jpg";
import Preloader from "../../../common/preloader/preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={s.img_montane}>
        <img src={foto} alt="img"></img>
      </div>
      <div className={s.profile}>
        <div className={s.avatar}>
          <img src={props.profile.photos.large} alt="img" />
        </div>
        <div className={s.profile_info}>
          <div>About me:</div>
          <div className={s.profile_text}>{props.profile.aboutMe}</div>
        </div>
        <div className={s.profile_contact}>
          <div>My contact:</div>
          <div>{props.profile.contacts.facebook}</div>
          <div>{props.profile.contacts.vk}</div>
          <div>{props.profile.contacts.twitter}</div>
          <div>{props.profile.contacts.github}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
