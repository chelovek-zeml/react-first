import s from "./profile-status.module.css";
import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  activeEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactiveEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.target.value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    }
  }

  render() {
    return (
      <div>
        <div>Status:</div>
        {!this.state.editMode && (
          <div className={s.status}>
            <span onDoubleClick={this.activeEditMode}>{this.props.status || '------------'}</span>
          </div>
        )}
        {this.state.editMode && (
          <div className={s.input_status}>
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactiveEditMode} value={this.state.status} />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
