FROM node:16
EXPOSE 3001
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
CMD npm start