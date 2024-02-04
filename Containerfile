FROM node:20-alpine

WORKDIR /app

COPY ./build .
COPY ./data ./data
COPY package-lock.json .
COPY package.json .

CMD ["node", "."]