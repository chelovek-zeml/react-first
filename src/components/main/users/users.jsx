import s from "./users.module.css";
import axios from "axios";
import React from "react";

class Users extends React.Component {
 

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
      <div className={s.users}>
        <div className={s.pagination}>
          {pages.map((p) => (
             <span className={this.props.currentPage === p && s.selectedPage} onClick={(e) => {this.onPageChanged(p)}}>{p}</span>
          ))}
          </div>
        {this.props.users.map((u) => (
          <div key={u.id} className={s.users_list}>
            <div className={s.photo_follow}>
              <div>
                <img
                  src={
                    u.photos.small != null
                      ? u.photos.small
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdxmR-s58w1t6-jN3NWjUtodePj_U0yM1dLyOpQNvbLJItfDOn3kKMEJK0OoYBp7-ajeA&usqp=CAU"
                  }
                  className={s.userPhoto}
                  alt="img"
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id);
                    }}
                  >
                    UnFollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
                    }}
                  >
                    Follow
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
  }
}

export default Users;
