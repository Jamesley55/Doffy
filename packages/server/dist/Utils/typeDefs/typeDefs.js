"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_import_1 = require("graphql-import");
const SchemaPath = "./src/Schemas/";
const AuthPath = "./src/Schemas/Auth";
const MessagePath = "./src/Schemas/Message";
const NotificationPath = "./src/Schemas/Notification";
const PasswordPath = "./src/Schemas/Password";
const PicturePath = "./src/Schemas/Picture";
const ServicePath = "./src/Schemas/Service";
const BookingPath = "./src/Schemas/Bookings";
exports.typeDefs = graphql_import_1.importSchema([
    `${AuthPath}/login.graphql`,
    `${AuthPath}/logout.graphql`,
    `${AuthPath}/register.graphql`,
    `${SchemaPath}/pathProblem.graphql`,
    `${MessagePath}/message.graphql`,
    `${PasswordPath}/password.graphql`,
    `${PicturePath}/pictures.graphql`,
    `${ServicePath}/service.graphql`,
    `${NotificationPath}/notification.graphql`,
    `${BookingPath}/booking.graphql`,
]);
//# sourceMappingURL=typeDefs.js.map