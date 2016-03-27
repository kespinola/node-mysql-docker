require('dotenv').load();

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      database: process.env.MYSQL_DEV_DATABASE_NAME,
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_ROOT_PASSWORD,
    },
    seeds: {
      directory: './db/seeds/dev',
    },
    migrations: {
      directory: './db/migrations',
    },
  },

  staging: {
    client: 'mysql',
    connection: {
      database: process.env.MYSQL_STAGING_DATABASE_NAME,
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_ROOT_PASSWORD,
    },
    seeds: {
      directory: './db/seeds/staging',
    },
  },

  production: {
    client: 'mysql',
    connection: {
      database: process.env.MYSQL_PROD_DATABASE_NAME,
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_ROOT_PASSWORD,
    },
  },
};
