require('dotenv').load();

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: process.env.MYSQL_HOSTNAME,
      database: process.env.MYSQL_DATABASE,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
    },
    seeds: {
      directory: './db/seeds',
    },
    migrations: {
      directory: './db/migrations',
    },
  },

  staging: {
    client: 'mysql',
    connection: {
      host: process.env.MYSQL_HOSTNAME,
      database: process.env.MYSQL_DATABASE,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
    },
    seeds: {
      directory: './db/seeds',
    },
    migrations: {
      directory: './db/migrations',
    },
  },

  production: {
    client: 'mysql',
    connection: {
      host: process.env.MYSQL_HOSTNAME,
      database: process.env.MYSQL_DATABASE,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
    },
    seeds: {
      directory: './db/seeds',
    },
    migrations: {
      directory: './db/migrations',
    },
  },
};
