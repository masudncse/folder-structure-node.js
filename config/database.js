require('dotenv').config();
module.exports = {
    development: {
        "dialect": "mysql",
        "host": process.env.DB_HOST,
        "port": process.env.DB_PORT || "root",
        "database": process.env.DB_DATABASE || "test",
        "username": process.env.DB_USERNAME || "root",
        "password": process.env.DB_PASSWORD || null,
    },
    production: {
        "dialect": "mysql",
        "host": process.env.DB_HOST,
        "port": process.env.DB_PORT || "root",
        "database": process.env.DB_DATABASE || "test",
        "username": process.env.DB_USERNAME || "root",
        "password": process.env.DB_PASSWORD || null,
    }
};
