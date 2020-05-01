FROM node:10

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


EXPOSE 4

CMD [ "node", "dist/index.js" ]