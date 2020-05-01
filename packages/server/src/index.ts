import "reflect-metadata";
import "dotenv/config";
import * as session from "express-session";
import { ApolloServer } from "apollo-server-express";
import * as express from "express";
import { createTypeormConn } from "./Utils/dbConnection/createTypeOrmConnection";
import { port } from "./Utils/host/host";
import { typeDefs } from "./Utils/typeDefs/typeDefs";
import { resolvers } from "./Utils/resolverPath/resolver";
import { redis } from "./redis";
import * as connectRedis from "connect-redis";

export const StartServer = async () => {
  console.log("server is starting");
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }: any) => ({ session: req.session, req }),
  });
  console.log("passer ApoloServer");
  await createTypeormConn();
  console.log("passer CreateTypeormConn");

  const app = express();
  console.log("passer express");

  const RedisStore = connectRedis(session);
  console.log("passer RedisStore");

  app.use(
    session({
      store: new RedisStore({
        client: redis,
      }),
      name: "abb",
      secret: "kasfkjadfuhew",
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 12 * 365, // 7 years
      },
    })
  );
  console.log("passer App.use");

  server.applyMiddleware({
    app,
  });

  console.log("passer on attend App.listend");

  // tslint:disable-next-line: object-literal-shorthand
  app.listen({ port: port }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    )
  );
};

StartServer();
