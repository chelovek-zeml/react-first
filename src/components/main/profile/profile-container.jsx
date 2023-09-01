import Profile from "./profile";
import React from "react";
import { connect } from "react-redux";
import { setUsersProfile, getUsersProfileThunkCreater, getStatus, updateStatus, savePhoto, saveProfile } from "../../../redux/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from "redux";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    let location = useLocation();
    let navigate = useNavigate();
    return <Children {...props} match={match} router={{location, navigate}}/>;
  };
}

class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = this.props.authorUserId;
      if(!userId) {
        this.props.router.navigate("/login");
      }
    }
    this.props.getUsersProfileThunkCreater(userId);
    this.props.getStatus(userId)
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, sapshot) {
    if(this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return <Profile {...this.props} 
    isOwner={!this.props.match.params.userId}
    profile={this.props.profile} 
    status={this.props.status} 
    updateStatus={this.props.updateStatus}
    savePhoto={this.props.savePhoto}
    saveProfile={this.props.saveProfile}
    />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorUserId: state.auth.userId,
  isAuth: state.auth.isAuth
});

export default compose(
  connect(mapStateToProps, { setUsersProfile, getUsersProfileThunkCreater, getStatus, updateStatus, savePhoto, saveProfile }),
  withRouter,
  
)(ProfileContainer);