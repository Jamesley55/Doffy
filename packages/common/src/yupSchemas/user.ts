import * as yup from "yup";
import {
	registerEmailValidation,
	registerPasswordValidation,
} from "./validation";

export const RegisterValidationSchema = yup.object().shape({
	email: registerEmailValidation,
	password: registerPasswordValidation,
	confirmPassword: registerPasswordValidation,
});

export const LoginValidationSchema = yup.object().shape({
	email: registerEmailValidation,
	password: registerPasswordValidation,
	confirmPassword: registerPasswordValidation,
});
