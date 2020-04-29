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
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }: any) => ({ session: req.session, req }),
  });
  let retry = 5;
  while (retry) {
    try {
      await createTypeormConn();
      break;
    } catch (err) {
      console.log(err);
      retry -= 1;
      console.log(`retry left ${retry}`);
      // wait 5 seconde
      await new Promise((res) => setTimeout(res, 5000));
    }
  }
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

  // tslint:disable-next-line: object-literal-shorthand
  app.listen({ port: port }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    )
  );
};

StartServer();
