import { IResolvers } from "apollo-server-express";
import * as aws from "aws-sdk";
import { Service } from "../../../entity/service";

const BUCKET_NAME = process.env.BUCKET_NAME;
const IAM_USER_KEY = process.env.IAM_USER_KEY;
const IAM_USER_SECRET = process.env.IAM_USER_SECRET;
const CLOUDFRONT_URL = process.env.CLOUDFRONT_URL
	? process.env.CLOUDFRONT_URL
	: "localhost:300";
export const fileUpload: IResolvers = {
	Mutation: {
		signS3: async (_, { filename, filetype, id }) => {
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

			const signedRequest = s3.getSignedUrl("putObject", s3Params);
			const url = `https://${CLOUDFRONT_URL}/${filename}`;
			if (id) {
				const service = await Service.findOne({ where: { id } });
				if (service) {
					const list: string[] = service.picturesUrl;
					list.push(url);
					service.picturesUrl = list;
					service?.save();
				}
			}
			return {
				signedRequest,
				url,
			};
		},
	},
};
