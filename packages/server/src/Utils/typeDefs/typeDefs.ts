import { importSchema } from "graphql-import";

export const typeDefs = importSchema("./src/Schemas/schemas.graphql");
