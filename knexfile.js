require('dotenv').load();

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: process.env.DOCKER_MACHINE_IP,
      database: process.env.MYSQL_DATABASE,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
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
      host: process.env.DOCKER_MACHINE_STAGING_IP,
      database: process.env.MYSQL_DATABASE,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
    },
    seeds: {
      directory: './db/seeds/staging',
    },
    migrations: {
      directory: './db/migrations',
    },
  },

  production: {
    client: 'mysql',
    connection: {
      host: process.env.DOCKER_MACHINE_IP,
      database: process.env.MYSQL_DATABASE,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
    },
    seeds: {
      directory: './db/seeds/production',
    },
    migrations: {
      directory: './db/migrations',
    },
  },
};
