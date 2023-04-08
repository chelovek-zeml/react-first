import s from "./post.module.css";
import avatar from "../../../../assets/ui_user_profile_avatar_person_icon_208734.svg";
import likeImg from "../../../../assets/like.svg";

function Post(props) {
  return (
    <div className={s.post}>
      <div className={s.avatar}>
        <img src={avatar}></img>
      </div>
      <div className={s.like}>
        <img src={likeImg}></img>
      </div>
      <div className={s.like_count}>{props.countLike}</div>
      {props.message}
    </div>
  );
}

export default Post;
