import { request } from "graphql-request";
import { User } from "../entity/User";
import { createTypeormConn } from "../Utils/dbConnection/createTypeOrmConnection";
import {
	duplicateEmail,
	emailNotLongEnough,
	invalidEmail,
} from "../Utils/FormatYupError/ErrorMessage";
import { host } from "../Utils/host/host";

// with the configuration in the packages.json
// calling the createTypeOrmConn will drop the database before
// all test
beforeAll(async () => {
	await createTypeormConn();
});
const username = "Jamesley55";
const email = "tom@gmail.com";
const password = "userPassword";

const mutation = (e: string, p: string) => `
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

describe("Register User", async () => {
	// verify we can register a user
	it("verify we ca register user", async () => {
		const response = await request(host, mutation(email, password));
		expect(response).toEqual({ register: null });
		const users = await User.find({ where: { email } });
		expect(users).toHaveLength(1);
		const user = users[0];
		expect(user.email).toEqual(email);
		expect(user.password).not.toEqual(password);
		// 1. test for error  password != confirmPassword
		// 2. test for duplicate email
		const response2: any = await request(host, mutation(email, password));
		expect(response2.register).toHaveLength(1);
		expect(response2.register[0]).toEqual({
			path: "email",
			message: duplicateEmail,
		});
	});

	it("check bad email", async () => {
		const response3: any = await request(host, mutation("b", password));
		expect(response3).toEqual({
			register: [
				{
					path: "email",
					message: emailNotLongEnough,
				},
				{
					path: "email",
					message: invalidEmail,
				},
			],
		});
		// 1. test length of email and password(s)
		// 2 . catch bad password ...{yup}
		// 3. valid email and invalid password
		const response4: any = await request(host, mutation(email, "bad"));
		expect(response4).toEqual({
			register: [
				{
					path: "email",
					message: "already taken",
				},
			],
		});
	});

	it("check  bad email and password ", async () => {
		const response5: any = await request(host, mutation("em", "bad"));
		expect(response5).toEqual({
			register: [
				{
					path: "email",
					message: emailNotLongEnough,
				},
				{
					path: "email",
					message: invalidEmail,
				},
			],
		});
	}); // 1. test length of email and password(s)
	// 2 . catch bad email ...{yup}
	// 3. valid password and invalid email

	// 1. test length of email and password(s)
	// 2 . catch bad password and bad email ...{yup}
	// 3. invalid email and invalid password
});

// use a test database
// drop all data once the test is over
// when i run npm test it also start the server
