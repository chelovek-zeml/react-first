import Profile from "./profile";
import React from "react";
import { connect } from "react-redux";
import { setUsersProfile, getUsersProfileThunkCreater } from "../../../redux/profile-reducer";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";

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
      userId = 2;
    }
    this.props.getUsersProfileThunkCreater(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { setUsersProfile, getUsersProfileThunkCreater })(
  WithUrlDataContainerComponent
);
