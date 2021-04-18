"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_request_1 = require("graphql-request");
const User_1 = require("../entity/User");
const createTypeOrmConnection_1 = require("../Utils/dbConnection/createTypeOrmConnection");
const ErrorMessage_1 = require("../Utils/FormatYupError/ErrorMessage");
const host_1 = require("../Utils/host/host");
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield createTypeOrmConnection_1.createTypeormConn();
}));
const username = "Jamesley55";
const email = "tom@gmail.com";
const password = "userPassword";
const mutation = (e, p) => `
 mutation {
	register( username: "${username}"
	email: "${e}", 
	password: "${p}",
	confirmPassword:"${p}"){
		path 
		message
	}
 }
`;
describe("Register User", () => __awaiter(void 0, void 0, void 0, function* () {
    it("verify we ca register user", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield graphql_request_1.request(host_1.host, mutation(email, password));
        expect(response).toEqual({ register: null });
        const users = yield User_1.User.find({ where: { email } });
        expect(users).toHaveLength(1);
        const user = users[0];
        expect(user.email).toEqual(email);
        expect(user.password).not.toEqual(password);
        const response2 = yield graphql_request_1.request(host_1.host, mutation(email, password));
        expect(response2.register).toHaveLength(1);
        expect(response2.register[0]).toEqual({
            path: "email",
            message: ErrorMessage_1.duplicateEmail,
        });
    }));
    it("check bad email", () => __awaiter(void 0, void 0, void 0, function* () {
        const response3 = yield graphql_request_1.request(host_1.host, mutation("b", password));
        expect(response3).toEqual({
            register: [
                {
                    path: "email",
                    message: ErrorMessage_1.emailNotLongEnough,
                },
                {
                    path: "email",
                    message: ErrorMessage_1.invalidEmail,
                },
            ],
        });
        const response4 = yield graphql_request_1.request(host_1.host, mutation(email, "bad"));
        expect(response4).toEqual({
            register: [
                {
                    path: "email",
                    message: "already taken",
                },
            ],
        });
    }));
    it("check  bad email and password ", () => __awaiter(void 0, void 0, void 0, function* () {
        const response5 = yield graphql_request_1.request(host_1.host, mutation("em", "bad"));
        expect(response5).toEqual({
            register: [
                {
                    path: "email",
                    message: ErrorMessage_1.emailNotLongEnough,
                },
                {
                    path: "email",
                    message: ErrorMessage_1.invalidEmail,
                },
            ],
        });
    }));
}));
//# sourceMappingURL=register.test.js.map