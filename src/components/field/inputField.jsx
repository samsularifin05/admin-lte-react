import React from "react";
import { FormProvider } from "react-hook-form";

const InputField = React.forwardRef(({ register, errors, ...props }, ref) => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <div className="input-group mb-3">
        <input
          {...register}
          ref={ref}
          type={props.type}
          readOnly={props.readOnly}
          placeholder={props.placeholder}
          style={{ textTransform: props.uppercase ? "uppercase" : "none" }}
          className={`form-control ${errors ? "is-invalid" : ""} ${
            props.customeCss || ""
          }`}
        />
        {props.formGroup && (
          <span
            style={{ cursor: "pointer" }}
            onClick={props.btnAction}
            className="input-group-text"
          >
            <span className={props.iconFormGroup} />
          </span>
        )}

        {errors && (
          <span className="error invalid-feedback">{errors.message || ""}</span>
        )}
      </div>
    </div>
  );
});

export default InputField;
