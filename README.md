# Prism Server
Starts up mysql and migrates database for an instance of prism via docker.

## Install Docker
http://stackoverflow.com/questions/32744780/install-docker-toolbox-on-a-mac-via-command-line

## Getting Started

### 1. Create .env file

```
MYSQL_USER=root
MYSQL_ROOT_PASSWORD=<SEE_PASSPACK>
MYSQL_HOST=<SEE_DOCKER_MACHINE_IP>
MYSQL_PORT=6603
MYSQL_DEV_DATABASE_NAME=prism_develop
MYSQL_STAGING_DATABASE_NAME=prism_staging
MYSQL_PROD_DATABASE_NAME=prism_production
```

### 2. Start mysql and run migration
`docker-compose up -d`
