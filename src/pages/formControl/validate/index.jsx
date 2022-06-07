const Validate = (value) => {
  const errors = {};
  if (!value.field_1) {
    errors.field_1 = "Field 1 Harus Diisi";
  }
  if (!value.field_2) {
    errors.field_2 = "Field 1 Harus Diisi";
  }
  return errors;
};

export default Validate;
