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
exports.StartServer = exports.app = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const connectRedis = require("connect-redis");
require("dotenv/config");
const express = require("express");
const session = require("express-session");
const graphql_redis_subscriptions_1 = require("graphql-redis-subscriptions");
require("reflect-metadata");
const confirm_1 = require("./modules/Auth/confirmUser/confirm");
const redis_1 = require("./redis");
const createTypeOrmConnection_1 = require("./Utils/dbConnection/createTypeOrmConnection");
const host_1 = require("./Utils/host/host");
const resolver_1 = require("./Utils/resolverPath/resolver");
const typeDefs_1 = require("./Utils/typeDefs/typeDefs");
const http = require("http");
exports.app = express();
exports.StartServer = () => __awaiter(void 0, void 0, void 0, function* () {
    const pubsub = new graphql_redis_subscriptions_1.RedisPubSub();
    const server = new apollo_server_express_1.ApolloServer({
        typeDefs: typeDefs_1.typeDefs,
        resolvers: resolver_1.resolvers,
        context: ({ req, res }) => ({
            redis: redis_1.redis,
            session: req ? req.session : undefined,
            req,
            res,
            pubsub,
        }),
        playground: {
            settings: {
                "request.credentials": "include",
            },
        },
    });
    yield createTypeOrmConnection_1.createTypeormConn();
    const RedisStore = connectRedis(session);
    exports.app.use(session({
        store: new RedisStore({
            client: redis_1.redis,
        }),
        name: "abb",
        secret: "kasfkjadfuhew",
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 1000 * 60 * 60 * 24 * 12 * 365,
        },
    }));
    confirm_1.ConfirmEmail();
    const cors = {
        credentials: true,
        origin: "http://localhost:19002/",
    };
    server.applyMiddleware({
        app: exports.app,
        cors,
    });
    const httpServer = http.createServer(exports.app);
    server.installSubscriptionHandlers(httpServer);
    httpServer.listen({ port: host_1.port }, () => console.log(`🚀 Server ready at http://localhost:${host_1.port}${server.graphqlPath}`));
});
//# sourceMappingURL=StartServer.js.map