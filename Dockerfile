FROM node:5.9.1

MAINTAINER prism inc. <ksespinola@gmail.com>

COPY . /code

WORKDIR /code

RUN npm install

CMD ["npm", "run", "db:setup:dev"]
