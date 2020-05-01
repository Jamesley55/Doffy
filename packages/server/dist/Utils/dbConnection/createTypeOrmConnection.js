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
const message_1 = require("./../../entity/message");
const User_1 = require("./../../entity/User");
const typeorm_1 = require("typeorm");
const booking_1 = require("../../entity/booking");
exports.createTypeormConn = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("je me suis plante ici");
    const connectionOptions = yield typeorm_1.getConnectionOptions(process.env.NODE_ENV);
    console.log("conection option", connectionOptions);
    if (process.env.NODE_ENV === "production") {
        const connection = typeorm_1.createConnection(Object.assign(Object.assign({}, connectionOptions), { url: process.env.DATABASE_URL, entities: [User_1.User, booking_1.Booking, message_1.Message], name: "default" }));
        console.log("connection", (yield connection).close);
        return connection;
    }
    else {
        const connection1 = typeorm_1.createConnection(Object.assign(Object.assign({}, connectionOptions), { name: "default" }));
        console.log("connection", (yield connection1).close);
        return connection1;
    }
});
//# sourceMappingURL=createTypeOrmConnection.js.map