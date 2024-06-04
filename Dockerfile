FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

ENV PUBLISH_DIR=./build

EXPOSE 3000