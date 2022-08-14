FROM node:16
WORKDIR /app
EXPOSE 3001
COPY package.json ./
CMD npm install
COPY . ./
ENTRYPOINT npm run dev