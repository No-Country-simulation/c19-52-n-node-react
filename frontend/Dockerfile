FROM node:18-alpine

WORKDIR /

RUN npm i -g vite serve

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

# TODO: esto expone en docker a pc??
EXPOSE 3000

CMD [ "serve", "-s", "dist" ]