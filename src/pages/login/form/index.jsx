import { ReanderField, React, Field, Button } from "components";
import { reduxForm } from "redux-form";
import Validate from "../validate";
let FormLogin = (props) => {
  return (
    <form method="post" onSubmit={props.handleSubmit}>
      <Field
        name="username"
        component={ReanderField}
        iconFormGroup="fas fa-envelope"
        formGroup
        noUperCase
        placeholder="SILAHKAN MASUKAN USERNAME"
      />
      <Field
        name="password"
        component={ReanderField}
        placeholder="SILAHKAN MASUKAN PASSWORD"
        iconFormGroup="fas fa-lock"
        formGroup
        noUperCase
      />
      <div className="row">
        <div className="col-12">
          <Button loading textLoading="Waiting" type="submit" color="primary" block title="Sign In" />
        </div>
      </div>
    </form>
  );
};
FormLogin = reduxForm({
  form: "FormLogin",
  enableReinitialize: true,
  validate: Validate
})(FormLogin);
export default FormLogin;
