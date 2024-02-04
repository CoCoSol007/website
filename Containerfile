FROM node:20-alpine

WORKDIR /app

COPY ./build .
COPY ./data ./data

CMD ["node", "."]