import LoadingBar from "react-top-loading-bar";
import Loading from "react-fullscreen-loading";
import Select from 'react-select';

export const LoadingTopBar = (color, progress) => {
  return <LoadingBar color={color || "red"} progress={progress} />;
};

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
  url === undefined ? alert('url is required') :
  window.open(url);
};
export const ReanderField = ({
  input,
  label,
  type,
  readOnly,
  placeholder,
  id,
  tabIndex,
  autoFocus,
  ref,
  customeCss,
  minLength,
  defaultValue,
  maxLength,
  uppercase,
  textColor = "text-black",
  formGroup,
  iconFormGroup,
  meta: { touched, error, warning }
}) => (
  <div className="form-group">
    {label &&
    <label htmlFor="" className={textColor}>
      {label || <> &nbsp; </>}
    </label>
    }
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
        className={
          `form-control ${touched && error && "is-invalid "} ${customeCss || ""} `
        }
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
  textColor = "text-black",
}) => (
  <div className="form-group">
    <label htmlFor="" className={textColor}>
      {label}
    </label>
    <Select
    {...input}
      id={id}
      readOnly={readOnly}
      onChange={value => input.onChange(value)}
      onBlur={() => input.onBlur(input.value)}
      tabIndex={tabIndex}
      placeholder={placeholder}
      isDisabled={disabled}
      options={options}
      styles={{
        control: (base,state) => ({
          ...base,
          border: touched && error && '1px solid red',
          boxShadow: "none",
          '&:hover': {
            border: touched && error &&'1px solid red',
            boxShadow: "none"
          }
        }),
        // Fixes the overlapping problem of the component
        menu: provided => ({ ...provided, zIndex: 9999 })
      }}
    />
  {touched &&
        ((error && <span className="error invalid-feedback">{error}.</span>) ||
          (warning && <p>{warning}</p>))}
  </div>
);