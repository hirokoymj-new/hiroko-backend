import { gql } from "apollo-server-express";

export const rootTypeDefs = gql`
  scalar Date
  scalar Time
  scalar DateTime

  enum AllowedColor {
    RED
    GREEN
    BLUE
    YELLOW
  }

  type Query {
    hello: String!
    favoriteColor: AllowedColor # As a return value
    avatar(borderColor: AllowedColor): String
  }

  type Mutation {
    sayHello(name: String!): String!
  }
`;
