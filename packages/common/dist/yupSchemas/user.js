"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginValidationSchema = exports.RegisterValidationSchema = void 0;
const yup = require("yup");
const validation_1 = require("./validation");
exports.RegisterValidationSchema = yup.object().shape({
    email: validation_1.registerEmailValidation,
    password: validation_1.registerPasswordValidation,
    confirmPassword: validation_1.registerPasswordValidation,
});
exports.LoginValidationSchema = yup.object().shape({
    email: validation_1.registerEmailValidation,
    password: validation_1.registerPasswordValidation,
    confirmPassword: validation_1.registerPasswordValidation,
});
//# sourceMappingURL=user.js.map