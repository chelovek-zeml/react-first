import s from "./users.module.css";
import React from "react";
import Paginator from "../../common/Paginator/paginator";
import User from "./user";

const Users = (props) => {
  return (
    <div className={s.users}>
      <Paginator
        pagesCount={props.pagesCount}
        currentPage={props.currentPage}
        pages={props.pages}
        onPageChanged={props.onPageChanged}
      />
      <div>
        {props.users.map((u) => (
          <User
            user={u}
            followingInProgress={props.followingInProgress}
            key={u.id}
            getFollowingThunkCreater={props.getFollowingThunkCreater}
            getUnfollowingThunkCreater={props.getUnfollowingThunkCreater}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
