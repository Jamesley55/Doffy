import { importSchema } from "graphql-import";

const SchemaPath = "./src/Schemas/";
const AuthPath = "./src/Schemas/Auth";
const MessagePath = "./src/Schemas/Message";
const NotificationPath = "./src/Schemas/Notification";
const PasswordPath = "./src/Schemas/Password";
const PicturePath = "./src/Schemas/Picture";
const ServicePath = "./src/Schemas/Service";

export const typeDefs = importSchema([
  `${AuthPath}/login.graphql`,
  `${AuthPath}/logout.graphql`,
  `${AuthPath}/register.graphql`,
  `${SchemaPath}/pathProblem.graphql`,
  `${MessagePath}/message.graphql`,
  `${PasswordPath}/password.graphql`,
  `${PicturePath}/pictures.graphql`,
  `${ServicePath}/service.graphql`,
  `${NotificationPath}/notification.graphql`,
]);
