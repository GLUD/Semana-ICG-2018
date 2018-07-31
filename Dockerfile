FROM nginx:alpine
LABEL maintainer "Sebastian Tabares Amaya <sytabaresa@gmail.com>"

RUN apk add --no-cache nodejs

WORKDIR /usr/share/nginx/html
COPY . .

RUN npm install && npm run-script build
