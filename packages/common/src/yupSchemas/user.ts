import * as yup from "yup";
import {
  registerEmailValidation,
  registerPasswordValidation,
} from "./validation";

export const validationSchema = yup.object().shape({
  email: registerEmailValidation,
  password: registerPasswordValidation,
  confirmPassword: registerPasswordValidation,
});
