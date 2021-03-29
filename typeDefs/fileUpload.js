import { gql } from "apollo-server-express";

export const fileUploadTypeDefs = gql`
  scalar Upload

  type File {
    url: String!
  }

  extend type Query {
    uploads: [File]
  }

  extend type Mutation {
    singleUpload(file: Upload!): File!
  }
`;
