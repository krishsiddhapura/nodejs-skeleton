#!/bin/sh

# WAITING FOR MYSQL CONTAINER
echo "Waiting for MySQL to be ready..."
until nc -z -v -w30 mysql 3306
do
  echo "Waiting for MySQL..."
  sleep 5
done
echo "MySQL is ready."

# RUN DATABASE MIGRATIONS
npx sequelize-cli db:migrate

# RUN PM2 INSTANCE TO HANDLE NODEJS
pm2-runtime start ecosystem.config.js