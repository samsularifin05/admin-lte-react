import {
  ReanderField,
  React,
  Field,
  Card,
  Button,
  ReanderSelect,
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
              name="username"
              component={ReanderField}
              label="Username"
              placeholder="Silahkan Masukan Username"
            />
          </div>
          <div className="col-4">
            <Field
              name="password"
              component={ReanderField}
              label="Password"
              type="password"
              placeholder="Silahkan Masukan Password"
            />
          </div>
          <div className="col-4">
            <Field
              name="level"
              component={ReanderSelect}
              label="Level"
              options={[
                {
                  label : "Owner",
                  value : "Owner"
                },
                {
                  label : "Admin",
                  value : "Admin"
                }
              ]}
              placeholder="Silahkan Pilih Level"
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
