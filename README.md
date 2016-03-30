# Prism Server
Starts mysql and migrate/seed database for prism within docker container

## Install Docker
http://stackoverflow.com/questions/32744780/install-docker-toolbox-on-a-mac-via-command-line

## Getting Started

### 1. Create .env file

```
NODE_ENV=development
DOCKER_MACHINE_IP=<SEE_DOCKER_MACHINE_IP>
MYSQL_ROOT_PASSWORD=<SEE_PASSPACK>
MYSQL_DATABASE=prism_develop
MYSQL_USER=prism_admin
MYSQL_PASSWORD=<SEE_PASSPACK>
```

### 2. Start mysql and run migrations/seed
`docker-compose up -d`
