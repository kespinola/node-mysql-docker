FROM node:5.9.1

MAINTAINER prism inc. <ksespinola@gmail.com>

RUN apt-get update && apt-get install -y wget

RUN wget https://github.com/jwilder/dockerize/releases/download/v0.2.0/dockerize-linux-amd64-v0.2.0.tar.gz

RUN tar -C /usr/local/bin -xzvf dockerize-linux-amd64-v0.2.0.tar.gz

COPY . /code

WORKDIR /code

RUN NODE_ENV=production npm install

CMD ["dockerize", "-wait", "tcp://db:3306", "npm", "run", "migrate"]
