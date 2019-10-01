require("dotenv").config();
module.exports = {
    /**
     *
     */
    lifetime: process.env.SESSION_LIFETIME || 120
};