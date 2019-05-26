import axios from "axios";
import passwordValidator from "password-validator";

const passwordSchema = new passwordValidator();
passwordSchema
  .is()
  .min(8)
  .is()
  .max(30)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits()
  .has()
  .symbols()
  .has()
  .not()
  .spaces();

function checkPassword(password) {
  let errors = [];

  errors = passwordSchema.validate(password, { list: true });

  return errors;
}

export default {
  register(payload) {
    let errors = checkPassword(payload['password']);

    if (errors.length === 0) {
      return axios.post("users/", payload);
    }
    else {
      console.log("reg errors:" , errors);
      return errors;
    }
  },

  login(payload) {
    let errors = checkPassword(payload['password']);

    if (errors.length === 0) {
      return axios.post("users/login/", payload);
    }
    else {
      console.log("login errors:", errors);
      return errors;
    }
  }
};
