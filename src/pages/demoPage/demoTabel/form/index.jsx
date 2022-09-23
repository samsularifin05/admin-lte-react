import {
  Button,
  HiiddenFiled,
  ReanderField,
  connect,
  Field,
  reduxForm,
  ReanderSelect
} from "components";
import React from "react";
import Validate from "../validate";

let FormDataUser = (props) => {
  return (
    <form onSubmit={props.handleSubmit} autoComplete="off">
      <div className="row">
        {props.isEdit && (
          <Field
            name="id"
            readOnly={props.isEdit}
            component={HiiddenFiled}
            type="hidden"
          />
        )}

          <div className="col-lg-6">
            <Field
              name="username"
              component={ReanderField}
              label="Username"
              type="text"
              readOnly={props.isEdit}
              placeholder="Masukkan Username"
            />
          </div>
         <div className="col-lg-6">
            <Field
              name="nama_lengkap"
              component={ReanderField}
              label="Nama Lengkap"
              type="text"
              placeholder="Masukkan Nama Lengkap"
            />
          </div>
        <div className="col-lg-6">
          <Field
            name="level"
            component={ReanderSelect}
            options={[
              {
                value: "ADMIN",
                label: "ADMIN"
              },
              {
                value: "SUPERUSERADMIN",
                label: "SUPERUSER ADMIN"
              }
            ]}
            label="Level"
            type="text"
            placeholder="Masukkan Level"
          />
        </div>

        {props.isEdit === false ? (
          <>
            <div className="col-lg-6">
              <Field
                name="password"
                component={ReanderField}
                label="Password"
                type="password"
                placeholder="Masukkan Password"
              />
            </div>
          </>
        ) : null}

        <div className={`col-lg-${props.isEdit ? '6' : '12'} text-right mt-2 btn-block`}>
          &nbsp;
          <Button title="Simpan" color="primary" block />
        </div>
      </div>
    </form>
  );
};

FormDataUser = reduxForm({
  form: "ModalFormDataUser",
  enableReinitialize: true,
  validate : Validate
})(FormDataUser);
export default connect((state) => {
  if (state?.utility?.modalShow?.isEdit === true) {
    return {
      isEdit: state?.utility?.modalShow?.isEdit,
      initialValues: {
        username: state?.utility?.modalShow?.data?.username,
        nama_lengkap: state?.utility?.modalShow?.data?.nama_lengkap,
        level: state?.utility?.modalShow?.data?.level,
        id: state?.utility?.modalShow?.data?.id,
      }
    };
  } else {
    return {
      isEdit: false
    };
  }
})(FormDataUser);
