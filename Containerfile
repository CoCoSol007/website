FROM node:lts-alpine AS build

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

RUN npm run build

FROM node:lts-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci --omit dev

COPY --from=build /app/build ./build

EXPOSE 3000

CMD ["node", "build"]
