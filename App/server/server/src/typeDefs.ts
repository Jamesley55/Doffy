import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: ID!
    email: String!
  }
  type Query {
    me: User
  }
  type Mutation {
    register(email: String!, password: String!, password2: String!): Boolean!
    login(email: String!, password: String!): User
  }
`;
