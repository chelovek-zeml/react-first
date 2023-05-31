import Profile from "./profile";
import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setUsersProfile } from "../../../redux/profile-reducer";
import { useParams } from "react-router-dom";
import { getProfile } from "../../../api/api";

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
    getProfile(userId)
      .then((data) => {
        this.props.setUsersProfile(data);
      });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUsersProfile })(
  WithUrlDataContainerComponent
);
