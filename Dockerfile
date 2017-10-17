FROM nginx:alpine
LABEL maintainer "Sebastian Tabares Amaya <sytabaresa@gmail.com>"

WORKDIR /usr/share/nginx/html
COPY . .

