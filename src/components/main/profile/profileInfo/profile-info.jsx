import s from "./profile-info.module.css";
import foto from "../../../../assets/wallpaperflare.com_wallpaper.jpg";
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./profile-status-use-hooks";
import { useState } from "react";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false);
  if (!props.profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  const onSubmit =  (formData) => {
     props.saveProfile(formData).then(() => {
      setEditMode(false);
     })
  
  };

  return (
    <div>
      <div className={s.img_montane}>
        <img src={foto} alt="img"></img>
      </div>
      <ProfileStatusWithHooks
        status={props.status}
        updateStatus={props.updateStatus}
      />

      <div className={s.profile}>
        <div className={s.avatar}>
          <img src={props.profile.photos.large} alt="img" />
        </div>
        {props.isOwner && (
          <input type={"file"} onChange={onMainPhotoSelected} />
        )}
      </div>

      {editMode ? (
        <ProfileDataForm
          initialValues={props.profile}
          props={props}
          onSubmit={onSubmit}
        />
      ) : (
        <ProfileData
          goToEditMode={() => {
            setEditMode(true);
          }}
          props={props}
        />
      )}
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};

const ProfileData = ({ goToEditMode, props }) => {
  return (
    <>
      <div className={s.profile_info}>
        {props.isOwner && (
          <div>
            <button onClick={goToEditMode}>Edit</button>
          </div>
        )}
        <div>
          <b>Full name:</b> {props.profile.fullName}
        </div>
        <div className={s.job}>
          <b>Looking for a job:</b>{" "}
          {props.profile.lookingForAJob ? "yes" : "no"}
        </div>
        <div>
          <b>My professional skills:</b>
          {props.profile.lookingForAJobDescription}
        </div>
        <div className={s.description}>
          About me:
          <div className={s.profile_text}>{props.profile.aboutMe}</div>
        </div>
      </div>
      <div className={s.profile_contact}>
        <b>My contacts:</b>
        {Object.keys(props.profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={props.profile.contacts[key]}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProfileInfo;
