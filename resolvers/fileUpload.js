// Define resolvers map for API definitions in SDL
import { GraphQLUpload } from "graphql-upload";
import * as path from "path";
import * as fs from "fs";

const generateRandomString = (length) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const fileUploadResolvers = {
  Upload: GraphQLUpload,

  Query: {
    uploads: (parent, args) => {},
  },
  Mutation: {
    singleUpload: async (parent, { file }) => {
      const { filename, createReadStream } = await file;
      const { ext } = path.parse(filename);
      const randomName = generateRandomString(12) + ext;

      const stream = createReadStream();
      const pathName = path.join(__dirname, `/public/images/${randomName}`);
      await stream.pipe(fs.createWriteStream(pathName));
      return {
        url: `http://localhost:4000/images/${randomName}`,
      };
    },
  },
};
