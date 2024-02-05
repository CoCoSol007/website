FROM node:20-alpine

WORKDIR /app

COPY package-lock.json .
COPY package.json .
COPY svelte.config.js .
COPY postcss.config.js .
COPY vite.config.js .
COPY tailwind.config.js .

RUN npm install -g npm@10.4.0
RUN npm install

COPY ./src ./src
COPY ./static ./static

RUN npm run build

CMD ["node", "build/index.js"]
