"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileUpload = void 0;
const aws = require("aws-sdk");
const service_1 = require("../../../entity/service");
const BUCKET_NAME = process.env.BUCKET_NAME;
const IAM_USER_KEY = process.env.IAM_USER_KEY;
const IAM_USER_SECRET = process.env.IAM_USER_SECRET;
const CLOUDFRONT_URL = process.env.CLOUDFRONT_URL;
exports.fileUpload = {
    Mutation: {
        signS3: (_, { filename, filetype, id }) => __awaiter(void 0, void 0, void 0, function* () {
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
                const service = yield service_1.Service.findOne({ where: { id } });
                if (service) {
                    const list = service.pictureUrl;
                    list.push(url);
                    service.pictureUrl = list;
                    service === null || service === void 0 ? void 0 : service.save();
                }
            }
            return {
                signedRequest,
                url,
            };
        }),
    },
};
//# sourceMappingURL=resolvers.js.map