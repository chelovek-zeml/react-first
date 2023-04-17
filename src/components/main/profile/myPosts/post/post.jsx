import s from "./post.module.css";
import likeImg from "../../../../../assets/like.svg";

function Post(props) {
  return (
    <div className={s.post}>
      <div className={s.avatar}>
        <img src={require(`../../../../../assets${props.avatar}`)} alt="img"></img>
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
