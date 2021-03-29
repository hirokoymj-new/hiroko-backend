import { DateResolver, TimeResolver, DateTimeResolver } from "graphql-scalars";

export const rootResolvers = {
  Date: DateResolver,
  Time: TimeResolver,
  DateTime: DateTimeResolver,

  Query: {
    hello: () => "Hello World",
    favoriteColor: () => "RED",
    avatar: (root, args) => {
      console.log(args.borderColor);
      // args.borderColor is 'RED', 'GREEN', or 'BLUE'
      const { color } = args.borderColor;
      const result = `Color is ${args.borderColor}`;
      console.log(result);
      return result;
    },
  },
  Mutation: {
    sayHello: (_, { name }) => {
      return `Hello ${name}!`;
    },
  },
};
