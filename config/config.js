require('dotenv').config();

module.exports = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        dialect: process.env.DB_CONNECTION,
        port: process.env.DB_PORT || 3306, // Default to 3306 if not specified
        logging: false,
    },
    test: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        dialect: process.env.DB_CONNECTION,
        port: process.env.DB_PORT || 3306, // Default to 3306 if not specified
        logging: false,
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        dialect: process.env.DB_CONNECTION,
        port: process.env.DB_PORT || 3306, // Default to 3306 if not specified
        logging: false, // Disable logging in production
    },
};
