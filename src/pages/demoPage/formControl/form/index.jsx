import {
  ReanderField,
  React,
  Field,
  Card,
  Button,
  ReanderSelect,
  Row,
  Col
} from "components";
import { reduxForm } from "redux-form";
import Validate from "../validate";
let FormInput = (props) => {
  return (
    <Card title="Form Submit">
      <form onSubmit={props.handleSubmit}>
        <Row>
          <Col size="3">
            <Field
              name="username"
              component={ReanderField}
              label="Username"
              placeholder="Silahkan Masukan Username"
            />
          </Col>
          <Col size="3">
            <Field
              name="password"
              component={ReanderField}
              label="Password"
              type="password"
              placeholder="Silahkan Masukan Password"
            />
          </Col>
          <Col size="3">
            <Field
              name="level"
              component={ReanderSelect}
              label="Level"
              options={[
                {
                  label: "Owner",
                  value: "Owner"
                },
                {
                  label: "Admin",
                  value: "Admin"
                }
              ]}
              placeholder="Silahkan Pilih Level"
            />
          </Col>
          <Col size="3" className="mt-2">
            <br />
            <Button type="submit" color="primary" block title="Kirim" />
          </Col>
        </Row>
      </form>
    </Card>
  );
};
FormInput = reduxForm({
  form: "FormInput",
  enableReinitialize: true,
  validate: Validate
})(FormInput);
export default FormInput;
