import ERRORS from  "../helpers/err.js";

const findErr = (code) => {
  return ERRORS.filter((err) => err.code == code);
}

export { findErr }