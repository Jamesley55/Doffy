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
require("reflect-metadata");
require("dotenv/config");
const session = require("express-session");
const apollo_server_express_1 = require("apollo-server-express");
const express = require("express");
const createTypeOrmConnection_1 = require("./Utils/dbConnection/createTypeOrmConnection");
const host_1 = require("./Utils/host/host");
const typeDefs_1 = require("./Utils/typeDefs/typeDefs");
const resolver_1 = require("./Utils/resolverPath/resolver");
const redis_1 = require("./redis");
const connectRedis = require("connect-redis");
exports.StartServer = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("server is starting");
    const server = new apollo_server_express_1.ApolloServer({
        typeDefs: typeDefs_1.typeDefs,
        resolvers: resolver_1.resolvers,
        context: ({ req }) => ({ session: req.session, req }),
    });
    console.log("passer ApoloServer");
    yield createTypeOrmConnection_1.createTypeormConn();
    console.log("passer CreateTypeormConn");
    const app = express();
    console.log("passer express");
    const RedisStore = connectRedis(session);
    console.log("passer RedisStore");
    app.use(session({
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
    console.log("passer App.use");
    server.applyMiddleware({
        app,
    });
    console.log("passer on attend App.listend");
    app.listen({ port: host_1.port }, () => console.log(`🚀 Server ready at http://localhost:${host_1.port}${server.graphqlPath}`));
});
exports.StartServer();
//# sourceMappingURL=index.js.map