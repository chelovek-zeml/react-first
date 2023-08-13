import { NavLink } from "react-router-dom";
import s from "./users.module.css";
import React from "react";

const User = (props) => {
  return (
 <div className={s.users_list}>
          <div className={s.photo_follow}>
            <div>
              <NavLink to={"/profile/" + props.user.id}>
                <img
                  src={
                    props.user.photos.small != null
                      ? props.user.photos.small
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdxmR-s58w1t6-jN3NWjUtodePj_U0yM1dLyOpQNvbLJItfDOn3kKMEJK0OoYBp7-ajeA&usqp=CAU"
                  }
                  className={s.userPhoto}
                  alt="img"
                />
              </NavLink>
            </div>
            <div>
              {props.user.followed ? (
                <button
                disabled={props.followingInProgress.some(id => id === props.user.id)}
                  onClick={() => {
                    props.getUnfollowingThunkCreater(props.user.id);
                  }}
                >
                  {" "}
                  UnFollow{" "}
                </button>
              ) : (
                <button
                disabled={props.followingInProgress.some(id => id === props.user.id)}
                  onClick={() => {
                    props.getFollowingThunkCreater(props.user.id);
                  }}
                >
                  {" "}
                  Follow{" "}
                </button>
              )}
            </div>
          </div>
          <div className={s.info}>
            <div>{props.user.name}</div>
            <div>{props.user.status}</div>
          </div>
          <div className={s.location}>
            <div className={s.country}>{"props.user.location.country"}</div>
            <div className={s.city}>{"props.user.location.city"}</div>
          </div>
        </div>
      )}

export default User;
