// import "reflect-metadata";
import * as session from "express-session";
import { ApolloServer } from "apollo-server-express";
import * as express from "express";
import { createTypeormConn } from "./Utils/dbConnection/createTypeOrmConnection";
import { port } from "./Utils/host/host";
import { typeDefs } from "./Utils/typeDefs/typeDefs";
import { resolvers } from "./Utils/resolverPath/resolver";

export const StartServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }: any) => ({ req }),
  });
  await createTypeormConn();
  const app = express();

  app.use(
    session({
      secret: "hahdhdhd",
      resave: false,
      saveUninitialized: false,
    })
  );
  server.applyMiddleware({
    app,
  });
  const cors = require("cors");
  app.use(cors());

  // tslint:disable-next-line: object-literal-shorthand
  app.listen({ port: port }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    )
  );
};

StartServer();
