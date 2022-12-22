# FROM ubuntu:22.04
FROM node:16.15.1
WORKDIR /usr/project/voteup/
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm","start"]