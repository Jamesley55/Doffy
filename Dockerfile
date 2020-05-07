#the version of node used in the container need to be the same as the version of node we are sing 
# in this application 
# in our case the version of node we're using is the 12 version 
# wich is not the latest node version 
FROM node:12

WORKDIR /doffy


COPY  package.json  ./
COPY ./packages/server/package.json ./packages/server/
COPY ./packages/common/package.json ./packages/common/

RUN yarn install --production

COPY ./packages/server/dist ./packages/server/dist
COPY ./packages/common/dist ./packages/common/dist
COPY ./packages/server/.env  ./packages/server/.env
COPY ./ormconfig.json   .


WORKDIR ./packages/server

RUN yarn copy

ENV NODE_ENV production


EXPOSE 443

CMD [ "node", "dist/index.js" ]