import { ReanderField, React, Field, Button, Row, Col } from "components";
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
        placeholder="Silahkan Masukan Username"
      />
      <Field
        name="password"
        type="password"
        component={ReanderField}
        placeholder="Silahkan Masukan Passwsord"
        iconFormGroup="fas fa-lock"
        formGroup
      />
      <Row>
        <Col size="12">
          <Button loading textLoading="Waiting" type="submit" color="primary" block title="Sign In" />
        </Col>
      </Row>
    </form>
  );
};
FormLogin = reduxForm({
  form: "FormLogin",
  enableReinitialize: true,
  validate: Validate
})(FormLogin);
export default FormLogin;
