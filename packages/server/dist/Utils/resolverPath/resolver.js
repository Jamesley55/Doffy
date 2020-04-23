"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolvers_1 = require("../../modules/temp/resolvers");
const resolvers_2 = require("../../modules/login/resolvers");
const resolvers_3 = require("../../modules/register/resolvers");
const resolvers_4 = require("../../modules/confirmUser/resolvers");
const resolvers_5 = require("../../modules/forgotPassword/resolvers");
const resolvers_6 = require("../../modules/changePassword/resolvers");
exports.resolvers = [
    resolvers_1.queryResolver,
    resolvers_2.loginResolver,
    resolvers_3.registerResolver,
    resolvers_4.confirmUser,
    resolvers_5.forgotPassword,
    resolvers_6.changePassword,
];
//# sourceMappingURL=resolver.js.map