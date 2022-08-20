FROM node:16-alpine
EXPOSE 3001
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
CMD npm start