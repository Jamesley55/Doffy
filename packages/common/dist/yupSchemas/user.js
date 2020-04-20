"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup = require("yup");
const validation_1 = require("./validation");
exports.validationSchema = yup.object().shape({
    email: validation_1.registerEmailValidation,
    password: validation_1.registerPasswordValidation,
    confirmPassword: validation_1.registerPasswordValidation,
});
//# sourceMappingURL=user.js.map