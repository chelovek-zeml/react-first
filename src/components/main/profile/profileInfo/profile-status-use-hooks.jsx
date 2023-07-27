import s from "./profile-status.module.css";
import React, { useState } from "react";

const ProfileStatusWithHooks = (props) => {
 
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  const activeEditMode = () => {
    setEditMode(true);
  };

  const deactiveEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
   setStatus(e.target.value)
  }
 
    return (
      <div>
        <div>Status:</div>
        {!editMode && (
          <div className={s.status}>
            <span onDoubleClick={activeEditMode}>{props.status || '------------'}</span>
          </div>
        )}
        {editMode && (
          <div className={s.input_status}>
            <input onChange={onStatusChange} autoFocus={true} onBlur={deactiveEditMode} value={status} />
          </div>
        )}
      </div>
    );
  }

export default ProfileStatusWithHooks;
