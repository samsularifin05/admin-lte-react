import {
  ReanderField,
  React,
  Field,
  Card,
  Button,
} from "components";
import { reduxForm } from "redux-form";
import Validate from "../validate";
let FormInput = (props) => {
  return (
    <Card title="Form Submit">
      <form onSubmit={props.handleSubmit}>
        <div className="row">
          <div className="col-4">
            <Field
              name="field_1"
              component={ReanderField}
              label="Field 1"
              placeholder="Silahkan Masukan Field 1"
            />
          </div>
          <div className="col-4">
            <Field
              name="field_2"
              component={ReanderField}
              label="FIELD 2"
              placeholder="Silahkan Masukan Field 2"
            />
          </div>
          <div className="col-4 mt-2">
            <br />
            <Button type="submit" color="primary" block title="Kirim" />
          </div>
        </div>
      </form>
    </Card>
  );
};
FormInput = reduxForm({
  form: "FormInput",
  enableReinitialize: true,
  validate : Validate
})(FormInput);
export default FormInput;
