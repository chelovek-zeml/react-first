import React from "react";
import s from "./add-message.module.css";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../../common/Forms-controls/FormsControls";
import { maxLengthCreator, required } from "../../../../utils/validators/validator";

const maxLength30 = maxLengthCreator(30);

function AddMessage(props) {
  const onSubmit = (values) => {
    props.addMessage(values.newMessage);
        }

  return (
    <div className={s.wrapper_message}>
      <span>My message</span>
      <div className={s.new_message}>
        <AddMessageReduxForm onSubmit={onSubmit}/>
      </div>
    </div>
  );
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea}
        validate={[required, maxLength30]}
         name={"newMessage"}
         placeholder="add your message"
        />
      </div>
      <div>
        <button>Add message</button>
      </div>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({
  form: "AddMessage",
})(AddMessageForm);

export default AddMessage;
