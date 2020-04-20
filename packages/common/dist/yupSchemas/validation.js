"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup = require("yup");
const emailNotLongEnough = "email must be at least 3 characters";
const passwordNotLongEnough = "password must be at least 3 characters";
const invalidEmail = "email must be a valid email";
exports.registerPasswordValidation = yup
    .string()
    .min(3, passwordNotLongEnough)
    .max(255)
    .required();
exports.registerEmailValidation = yup
    .string()
    .min(3, emailNotLongEnough)
    .max(255)
    .email(invalidEmail)
    .required();
//# sourceMappingURL=validation.js.map