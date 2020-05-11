import "reflect-metadata";
import "dotenv/config";
import * as session from "express-session";
import { ApolloServer } from "apollo-server-express";
import { RedisPubSub } from "graphql-redis-subscriptions";
import * as express from "express";
import { createTypeormConn } from "./Utils/dbConnection/createTypeOrmConnection";
import { port } from "./Utils/host/host";
import { typeDefs } from "./Utils/typeDefs/typeDefs";
import { resolvers } from "./Utils/resolverPath/resolver";
import { redis } from "./redis";
import * as connectRedis from "connect-redis";
import { ConfirmEmail } from "./modules/Auth/confirmUser/confirm";
import http = require("http");

export const app = express();

export const StartServer = async () => {
  const pubsub = new RedisPubSub();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }: any) => ({
      redis,
      session: req ? req.session : undefined,
      req,
      res,
      pubsub,
    }),
  });
  await createTypeormConn();

  const RedisStore = connectRedis(session);

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

  ConfirmEmail();

  server.applyMiddleware({
    app,
  });

  // for pubsub (subscription)
  const httpServer = http.createServer(app);
  server.installSubscriptionHandlers(httpServer);
  // tslint:disable-next-line: object-literal-shorthand
  httpServer.listen({ port: port }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    )
  );
};