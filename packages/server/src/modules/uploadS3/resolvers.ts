import * as aws from "aws-sdk";
import { IResolvers } from "apollo-server-express";

const BUCKET_NAME = process.env.BUCKET_NAME;
const IAM_USER_KEY = process.env.IAM_USER_KEY;
const IAM_USER_SECRET = process.env.IAM_USER_SECRET;
const CLOUDFRONT_URL = process.env.CLOUDFRONT_URL;
export const fileUpload: IResolvers = {
  Mutation: {
    signS3: async (_, { filename, filetype }) => {
      const s3 = new aws.S3({
        accessKeyId: IAM_USER_KEY,
        secretAccessKey: IAM_USER_SECRET,
        signatureVersion: "v4",
        region: "us-east-2",
      });

      const s3Params = {
        Bucket: BUCKET_NAME,
        Key: filename,
        Expires: 60,
        ContentType: filetype,
        ACL: "public-read",
      };

      const signedRequest = await s3.getSignedUrl("putObject", s3Params);
      const url = `https://${CLOUDFRONT_URL}.com/${filename}`;

      return {
        signedRequest,
        url,
      };
    },
  },
};
