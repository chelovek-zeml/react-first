import s from "./profile-status.module.css";
import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false
  }

  activeEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactiveEditMode = () => {
    this.setState({
      editMode: false
    })
  }

  render() {
    return (
      <div>
        <div>Status:</div>
        {!this.state.editMode && (
          <div className={s.status}>
            <span onDoubleClick={this.activeEditMode}>{this.props.status}</span>
          </div>
        )}
        {this.state.editMode && (
          <div className={s.input_status}>
            <input autoFocus={true} onBlur={this.deactiveEditMode} value={this.props.status} />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
