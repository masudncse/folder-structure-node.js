require('dotenv').config();
module.exports = {
    /**
     *
     */
    name: process.env.APP_Name || "App: Node",

    /**
     *
     */
    env: process.env.APP_ENV || "development",

    /**
     *
     */
    debug: process.env.APP_DEBUG || false,

    /**
     *
     */
    url: process.env.APP_URL || "http://localhost",

    /**
     *
     */
    timezone: "UTC",

    /**
     *
     */
    locale: "en",

    /**
     *
     */
    key: process.env.APP_KEY || "HWNJAPP",
};