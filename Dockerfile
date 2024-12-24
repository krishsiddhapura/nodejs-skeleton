FROM node:18-slim

# INSTALLING REWUIRED CLI SOFTWARES
RUN apt-get update && apt-get install -y\
    unzip \
    git \
    netcat-openbsd \
    && apt-get -y clean

# SETUP WORKING DIRECTORY TO MAKE SURE ALL COMMANDS ARE BEING EXECUTED INSIDE RELATIVE DIRECTORY
WORKDIR /var/www/html

# COPIYING PROJECT FILES
COPY . /var/www/html

# GIVING PERMISSIONS TO FOLDERS
RUN chown -R root:www-data /var/www/html/ && chmod -R 775 /var/www/html/

# INSTLALLING DEPENDENCIES
RUN npm install pm2 -g  && npm install

# EXPOSING PORT 5000
EXPOSE 5000

# GIIVING EXECUTION PERMISSION TO .sh FILE FOR FURTHER USE
RUN chmod +x /var/www/html/entrypoint_fpm.sh

# SETS OF COMMANDS WHICH WILL BE EXECUTED ONCE INSTALLATION IS COMPLETED AND CONTAINR STARTS
ENTRYPOINT ["/var/www/html/entrypoint_fpm.sh"]
