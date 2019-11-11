FROM node:10 as builder

WORKDIR /usr/src/app

RUN npm i -g @angular/cli

COPY package.json /usr/src/app/package.json

RUN npm install

COPY . .

RUN ng build --aot --prod

FROM nginx:alpine

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html