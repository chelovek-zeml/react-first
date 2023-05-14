import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from "../../../redux/user-reducer";
import Users from "./users";
import axios from "axios";
import React from "react";

class UsersApi extends React.Component {
 
  componentDidMount() {
    
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then((response) => {
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
        });
      // console.log(
      //   axios.get("https://social-network.samuraijs.com/api/1.0/users")
      // );
    
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    .then((response) => {
      this.props.setUsers(response.data.items);
      
    });
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <Users pages={pages} currentPage={this.props.currentPage} onPageChanged={this.onPageChanged}  users={this.props.users} unfollow={this.props.unfollow} follow={this.props.follow}/>
    );
  }
}


let mapStateToProps = (state) => {
    return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
    };
  };
  
  let mapDispatchToProps = (dispatch) => {
    return {
     follow: (userId) => {
        dispatch(followAC(userId))
     },
     unfollow: (userId) => {
        dispatch(unfollowAC(userId))
     },
     setUsers: (users) => {
        dispatch(setUsersAC(users));
     },
     setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
     },
     setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount));
     },
    };
  };
  
  const AddMessageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(UsersApi);
  
  export default AddMessageContainer;