import express from "express";
import { ApolloServer, makeExecutableSchema } from "apollo-server-express";
import { graphqlUploadExpress } from "graphql-upload";
import cors from "cors";
import dotenv from "dotenv";

import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

dotenv.config();

console.log(process.env.NODE_ENV);
console.log(process.env.MONGO_DB_URL);

const port = process.env.PORT || 4000;

const app = express();
app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 })); // Maximum file size is up to 10MB
app.use(express.static("public"));
app.use(cors());

// Build GraphQL schema based on SDL definitions and resolvers maps
const schema = makeExecutableSchema({ typeDefs, resolvers });

// Build Apollo server
const apolloServer = new ApolloServer({ schema, uploads: false });
apolloServer.applyMiddleware({ app });

// Run server
app.listen({ port }, () => {
  console.log(
    `🚀Server ready at http://localhost:${port}${apolloServer.graphqlPath}`
  );
});
