FROM node:18-alpine3.18

RUN apk update && apk add --no-cache python3 py3-pip make build-base

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

ENTRYPOINT [ "node" ]

CMD [ "dist/main.js" ]
