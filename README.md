# Doffy
Doffy is a powerful business tool for beauty and barber professionals and it also gives clients an easy way to discover and book services like haircuts and makeup online. 

It has everything you need to run your business from anywhere: online booking that’s easy for small business customers, a point of sale that tracks customer details, and a secure, fast payments system. It’s all in one place, and for one calendar, it’s free. 

# Download App Here 

 https://apps.apple.com/app/id1510079483

# Package 

This project is made up of 5 packages that share code using Yarn Workspaces.

web (React-native-web/React website)

app (React Native Mobil app)

server (GraphQL Typescript server)

common (Code shared between web, app, and server)

controller (Components shared between web and app)

Component (Custom component built for reutilisation)

# Requirement 
 - npm package manager 
 - Node.js 
 - Yarn 
 - Redis 
 - PostgresQl

# installation

1. clone project https://github.com/Jamesley55/Doffy.git
    
2. run `Yarn install` in workspace 
    
3. run `brew services start postgresql` to start PostgreSQL server
    
4.  run `createdb mainDB` to create PostgreSQL database called mainDB
   
5. Install and start Redis

6. In packages/server create a file called .env and add the following line inside:

    BUCKET_NAME= your Amazon S3 bucket if you have one or else Read step #8
    
    IAM_USER_KEY= your Amazon IAM KEY  if you have one or else Read step #8
    
    IAM_USER_SECRET= your Amazon User secret key if you have one or else Read step #8
    
    CLOUDFRONT_URL= your Amazon CLOUDFRONT URL if you have one or else Read step #8
    
    Test_PORT=8000
    
    DEVOP_PORT=4000
    
    PRODUCTION_PORT=3000
    
    Redis_HOST=localhost
    

7. if you dont have an AWS S3 bucket, IAM KEY, USER SECRET KEY comment in https://github.com/Jamesley55/Doffy/blob/66da63aa9245f3c1cfad3593bcc5ea647751e438/packages/server/src/modules/Pictures/uploadS3/resolvers.ts#L11
and put signedRequest to "https://localhost:300/randomSignedURL"

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

8. Run yarn build in packages/common

9. Run yarn build in packages/controller

10. Run yarn build in packages/component

 

# Features 

React Native app register/login

Deploy backend and app

App create Service

App Book service 

App find  Service Availability

App Notification 

logout
