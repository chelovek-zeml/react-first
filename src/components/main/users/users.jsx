import { NavLink } from "react-router-dom";
import s from "./users.module.css";
import React from "react";
import { getFollow, getUnfollow } from "../../../api/api";

const Users = (props) => {
  return (
    <div className={s.users}>
      <div className={s.pagination}>
        {props.pages.map((p) => (
          <span
            key={p}
            className={props.currentPage === p ? s.selectedPage : s.page}
            onClick={(e) => {
              props.onPageChanged(p);
            }}
          >
            {p}
          </span>
        ))}
      </div>
      {props.users.map((u) => (
        <div key={u.id} className={s.users_list}>
          <div className={s.photo_follow}>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={
                    u.photos.small != null
                      ? u.photos.small
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdxmR-s58w1t6-jN3NWjUtodePj_U0yM1dLyOpQNvbLJItfDOn3kKMEJK0OoYBp7-ajeA&usqp=CAU"
                  }
                  className={s.userPhoto}
                  alt="img"
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => {
                    props.toggleFollowingProgress(true, u.id);
                    getUnfollow(u.id).then((data) => {
                      if (data.resultCode === 0) {
                        props.unfollow(u.id);
                      }
                      props.toggleFollowingProgress(false, u.id);
                    });
                  }}
                >
                  {" "}
                  UnFollow{" "}
                </button>
              ) : (
                <button
                disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => {
                    props.toggleFollowingProgress(true, u.id);
                    getFollow(u.id).then((data) => {
                      if (data.resultCode === 0) {
                        props.follow(u.id);
                      }
                      props.toggleFollowingProgress(false, u.id);
                    });
                  }}
                >
                  {" "}
                  Follow{" "}
                </button>
              )}
            </div>
          </div>
          <div className={s.info}>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </div>
          <div className={s.location}>
            <div className={s.country}>{"u.location.country"}</div>
            <div className={s.city}>{"u.location.city"}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
