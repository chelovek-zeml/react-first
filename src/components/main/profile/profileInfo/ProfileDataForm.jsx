import React from "react";
import s from "./profile-info.module.css";
import style from "./../../../common/Forms-controls/FofrmsControls.module.css";
import {
  Input,
  Textarea,
  createField,
} from "../../../common/Forms-controls/FormsControls";
import { reduxForm } from "redux-form";

const ProfileDataForm = ({ handleSubmit, props, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={s.profile_info}>
        <div>
          <button>Save</button>
        </div>
        { error && <div className={style.form_error}>
        {error}
      </div>}
        <div>
          <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
        </div>
        <div className={s.job}>
          <b>Looking for a job:</b>
          {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
        </div>
        <div>
          <b>My professional skills</b>:
          {createField(
            "My professional skills",
            "lookingForAJobDescription",
            [],
            Textarea
          )}
        </div>
        <div>
          About me:{" "}
          <div className={s.profile_text}>
            {createField("About me", "aboutMe", [], Textarea)}
          </div>
        </div>
      </div>
      <div className={s.profile_contact}>
        <b>My contacts:</b>
        {Object.keys(props.profile.contacts).map((key) => {
          return (
            <div key={key}>
              <b>{key}:</b> {createField(key, "contacts." + key, [], Input)}
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: "editProfile", destroyOnUnmount: false })(
  ProfileDataForm
);

export default ProfileDataFormReduxForm;
