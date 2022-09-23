const Validate = (value) => {
  const errors = {};
  if (!value.username) {
    errors.username = "Username is required";
  }
  if (!value.nama_lengkap) {
    errors.nama_lengkap = "Nama Lengkap is required";
  }
  if (!value.password) {
    errors.password = "Nama Lengkap is required";
  }
  if (!value.level) {
    errors.level = "Level is required";
  }
  return errors;
};

export default Validate;
