FROM node

WORKDIR /doffy

COPY  package.json  ./
COPY ./packages/server/package.json ./packages/server/
COPY ./packages/common/package.json ./packages/common/

RUN yarn install 
RUN apt-get update

RUN apt-get -y install redis-server
RUN redis-server --daemonize yes


COPY ./packages/server/dist ./packages/server/dist/
COPY ./packages/common/dist ./packages/common/dist/
COPY ./packages/server/.env  ./packages/server/.env
COPY ./ormconfig.json   .


WORKDIR ./packages/server
RUN yarn copy

ENV NODE_ENV production

EXPOSE 4000

CMD [ "node", "dist/index.js" ]






