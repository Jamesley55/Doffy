import "reflect-metadata";
import "dotenv/config";
import * as session from "express-session";
import { ApolloServer } from "apollo-server-express";
import * as express from "express";
import { createTypeormConn } from "./Utils/dbConnection/createTypeOrmConnection";
import { port, host } from "./Utils/host/host";
import { typeDefs } from "./Utils/typeDefs/typeDefs";
import { resolvers } from "./Utils/resolverPath/resolver";
import { redis } from "./redis";
import * as connectRedis from "connect-redis";
import * as cors from "cors";

export const StartServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }: any) => ({ req }),
  });
  await createTypeormConn();
  const app = express();

  const RedisStore = connectRedis(session);

  app.use(
    session({
      store: new RedisStore({
        client: redis as any,
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
  server.applyMiddleware({
    app,
  });
  app.use(
    cors({
      credentials: true,
      origin: host,
    })
  );

  // tslint:disable-next-line: object-literal-shorthand
  app.listen({ port: port }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    )
  );
};

StartServer();
