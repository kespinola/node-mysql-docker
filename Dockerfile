FROM node:argon

MAINTAINER prism inc. <ksespinola@gmail.com>

COPY . /code

WORKDIR /code

RUN npm install

CMD ["npm", "run", "migrate:dev"]
