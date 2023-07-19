import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/Forms-controls/FormsControls";
import { required } from "../../utils/validators/validator";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";

const Login = (props) => {

    const onSubmit = (formData) => {
props.login(formData.email, formData.password, formData.rememberMe, );
    }

    if (props.isAuth) {
      return <Navigate to={"/profile"} />
    }
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <div>
        <Field placeholder="email" validate={[required]} name={"email"} component={Input}/>
      </div>
      <div>
        <Field placeholder="password" validate={[required]} type={"password"} name={"password"} component={Input} />
      </div>
      <div>
        <Field type={"checkbox"} validate={[required]} name={"rememberMe"} component={Input} /> remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const mapStateToProps = (state) => ({
isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);
