FROM node:6.9.4-alpine
EXPOSE 5000
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD . /usr/src/app
RUN npm install --production
ENTRYPOINT ["node", "player-service"]