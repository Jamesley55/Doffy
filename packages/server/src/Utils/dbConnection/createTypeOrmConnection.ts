import { createConnection, getConnectionOptions } from "typeorm";

export const createTypeormConn = async () => {
	console.log("je me suis plante ici");
	const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
	console.log("conection option", connectionOptions);
	if (process.env.NODE_ENV === "production") {
		const connection = createConnection({
			...connectionOptions,
			url: process.env.DATABASE_URL,
			name: "default",
		} as any);
		console.log("connection", (await connection).close);

		return connection;
	} else {
		const connection1 = createConnection({
			...connectionOptions,
			name: "default",
		});
		console.log("connection", (await connection1).close);
		return connection1;
	}
};
