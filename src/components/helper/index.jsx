import Loading from "react-fullscreen-loading";
import Select from "react-select";
import Swal from "sweetalert2";
import React from "react";
import { doDecrypt, doEncrypt } from "./Encrypt";
// import EmptyTable from "./emptyTable";

export const LoadingContent = () => {
  return (
    <Loading
      loading
      background="rgba(0, 0, 0, 0.35)"
      loaderColor="rgba(94, 147, 117, 1)"
    />
  );
};

export const openTab = (url) => {
  url === undefined ? alert("url is required") : window.open(url);
};
export const HiiddenFiled = ({
  input,
  label,
  type,
  readOnly,
  placeholder,
  value,
  id,
  tabIndex,
  meta: { touched, error, warning }
}) => (
  <>
    <input
      onKeyPress={(event) => {
        if (event.key === "Enter") {
          event.preventDefault(); //<===== This stops the form from being submitted
        } else {
        }
      }}
      {...input}
      tabIndex={tabIndex}
      autoComplete="off"
      type={type}
      id={id}
      className="form-control"
      readOnly={readOnly}
      defaultValue={value}
      placeholder={placeholder}
    />
  </>
);
export const ReanderField = ({
  input,
  label,
  type,
  readOnly,
  placeholder,
  id,
  tabIndex,
  ref,
  customeCss,
  minLength,
  maxLength,
  uppercase,
  textColor = "text-black",
  formGroup,
  iconFormGroup,
  meta: { touched, error, warning }
}) => (
  <div className="form-group">
    {label && (
      <label htmlFor="" className={textColor}>
        {label || <> &nbsp; </>}
      </label>
    )}
    <div className="input-group">
      <input
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            event.preventDefault(); //<===== This stops the form from being submitted
          } else {
          }
        }}
        {...input}
        tabIndex={tabIndex}
        ref={ref}
        autoComplete="off"
        type={type}
        id={id}
        style={{ textTransform: uppercase ? "uppercase" : "none" }}
        className={`form-control ${touched && error && "is-invalid "} ${
          customeCss || ""
        } `}
        readOnly={readOnly}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
      />
      {formGroup && (
        <div className="input-group-append">
          <div className="input-group-text">
            <span className={iconFormGroup}></span>
          </div>
        </div>
      )}
      {touched &&
        ((error && <span className="error invalid-feedback">{error}.</span>) ||
          (warning && <p>{warning}</p>))}
    </div>
  </div>
);

const adaptFileEventToValue = (delegate) => (e) => delegate(e.target.files[0]);

export const FileInput = ({
  input: { value: omitValue, onChange, onBlur, ...inputProps },
  meta: omitMeta,
  ...props
}) => {
  return (
    <div className="form-group mt-2">
      <label></label>
      <div className="input-group">
        <input
          onChange={adaptFileEventToValue(onChange)}
          onBlur={adaptFileEventToValue(onBlur)}
          type="file"
          {...props.input}
          {...props}
        />
      </div>
    </div>
  );
};

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  customClass: {
    container: "my-swal"
  },
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  }
});
export function ToastNotification(status, text) {
  return new Promise((resolve, reject) => {
    Toast.fire({
      icon: status,
      title: text
    })
      .then(resolve("berhasil"))
      .catch(reject("error"));
  });
}

export const setItem = (nama, data) => {
  localStorage.setItem(doEncrypt(nama), JSON.stringify(doEncrypt(data)));
};
export const removeItem = (nama) => {
  localStorage.removeItem(doEncrypt(nama));
};
export const getItem = (nama) => {
  return localStorage.getItem(doEncrypt(nama)) === null
    ? []
    : doDecrypt(JSON.parse(localStorage.getItem(doEncrypt(nama))) || "");
};

export const ReanderSelect = ({
  input,
  label,
  readOnly,
  placeholder,
  options,
  onChange,
  id,
  disabled,
  tabIndex,
  meta: { touched, error, warning },
  value,
  textColor = "text-black"
}) => (
  <div className="form-group">
    <label htmlFor="" className={textColor}>
      {label}
    </label>
    <Select
      {...input}
      id={id}
      readOnly={readOnly}
      onChange={(value) => input.onChange(value)}
      onBlur={() => input.onBlur(input.value)}
      tabIndex={tabIndex}
      placeholder={placeholder}
      isDisabled={disabled}
      options={options}
      styles={{
        control: (base, state) => ({
          ...base,
          border: touched && error && "1px solid red",
          boxShadow: "none",
          "&:hover": {
            border: touched && error && "1px solid red",
            boxShadow: "none"
          }
        }),
        // Fixes the overlapping problem of the component
        menu: (provided) => ({ ...provided, zIndex: 9999 })
      }}
    />
    {touched &&
      ((error && <span className="error invalid-feedback">{error}.</span>) ||
        (warning && <p>{warning}</p>))}
  </div>
);

export function NotificationConfirm(status, text) {
  return new Promise((resolve, reject) => {
    Swal.fire({
      html: text,
      icon: status,
      position: "top-center",
      cancelButtonText: "Tidak",
      showCancelButton: true,
      confirmButtonText: "OK",
      showConfirmButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        resolve("berhasil");
      }
    });
  });
}
