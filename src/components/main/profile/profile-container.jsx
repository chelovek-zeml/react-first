import Profile from "./profile";
import React from "react";
import { connect } from "react-redux";
import { setUsersProfile, getUsersProfileThunkCreater, getStatus, updateStatus } from "../../../redux/profile-reducer";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = 29173;
    }
    this.props.getUsersProfileThunkCreater(userId);
    this.props.getStatus(userId)
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>;
  }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
});

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, { setUsersProfile, getUsersProfileThunkCreater })(
//   WithUrlDataContainerComponent
// );
export default compose(
  connect(mapStateToProps, { setUsersProfile, getUsersProfileThunkCreater, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);