import s from "./post.module.css";
import avatar from "../../../../../assets/avatar_icon.svg";
import likeImg from "../../../../../assets/like.svg";

function Post(props) {
  return (
    <div className={s.post}>
      <div className={s.avatar}>
        <img src={avatar} alt="img"></img>
      </div>
      <div className={s.like}>
        <img src={likeImg} alt="img"></img>
      </div>
      <div className={s.like_count}>{props.countLike}</div>
      {props.message}
    </div>
  );
}

export default Post;
