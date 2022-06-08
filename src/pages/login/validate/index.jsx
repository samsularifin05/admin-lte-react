const Validate = (value) => {
    const errors = {};
    if (!value.username) {
      errors.username = "Username is tequired";
    }
    if (!value.password) {
      errors.password = "Password is required";
    }
    return errors;
  };
  
  export default Validate;
  