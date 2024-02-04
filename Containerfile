FROM node:20-alpine

WORKDIR /app

COPY ./build .

CMD ["node", "."]