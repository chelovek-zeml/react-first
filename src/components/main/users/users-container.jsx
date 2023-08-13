import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  unfollow,
  toggleFollowingProgress,
  getUsersThunkCreater,
  getFollowingThunkCreater,
  getUnfollowingThunkCreater,
} from "../../../redux/user-reducer";
import Users from "./users";
import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import { compose } from "redux";
import { getFollowingInProgress, getIsFetching, getPageSize, getUsers, getcurrentPage, gettotalUsersCount } from "../../../redux/users-selectors";

class UsersApi extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreater(
      this.props.currentPage,
      this.props.pageSize
    );
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsersThunkCreater(pageNumber, this.props.pageSize);
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            pages={pages}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            toggleFollowingProgress={this.props.toggleFollowingProgress}
            followingInProgress={this.props.followingInProgress}
            getFollowingThunkCreater={this.props.getFollowingThunkCreater}
            getUnfollowingThunkCreater={this.props.getUnfollowingThunkCreater}
          />
        )}
      </>
    );
  }
}



let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: gettotalUsersCount(state),
    currentPage: getcurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};



export default compose(connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsersThunkCreater,
  getFollowingThunkCreater,
  getUnfollowingThunkCreater,
}),
)(UsersApi)