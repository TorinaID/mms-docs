FROM node:lts-alpine

EXPOSE 3000

WORKDIR /app

# ENV PATH /app/node_modules/.bin:$PATH

COPY package.json yarn.lock ./

RUN yarn install

# COPY . .

# CMD [ "astro", "dev" ]