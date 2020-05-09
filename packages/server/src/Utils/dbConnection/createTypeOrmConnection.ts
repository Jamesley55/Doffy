import { Message } from "../../entity/message";
import { User } from "../../entity/User";
import { getConnectionOptions, createConnection } from "typeorm";
import { Booking } from "../../entity/booking";

export const createTypeormConn = async () => {
  console.log("je me suis plante ici");
  const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
  console.log("conection option", connectionOptions);
  if (process.env.NODE_ENV === "production") {
    const connection = createConnection({
      ...connectionOptions,
      url: process.env.DATABASE_URL,
      entities: [User, Booking, Message],
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
