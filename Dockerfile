FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8081

ARG BUILD_MONGOUSER=''
ARG BUILD_MONGOPASS=''
ARG BUILD_SERVER_URL=''

ENV MONGOUSER=$BUILD_MONGOUSER
ENV MONGOPASS=$BUILD_MONGOPASS
ENV SERVER_URL=BUILD_SERVER_URL

ENTRYPOINT ["npm", "start"]