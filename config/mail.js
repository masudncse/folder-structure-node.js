require('dotenv').config();
module.exports = {
    /**
     *
     */
    driver: process.env.MAIL_DRIVER || "smtp",

    /**
     *
     */
    host: process.env.MAIL_HOST || "smtp.mailgun.org",

    /**
     *
     */
    port: process.env.MAIL_PORT || "587",

    /**
     *
     */
    from: {
        address: process.env.MAIL_FROM_ADDRESS || "hello@example.com",
        name: process.env.MAIL_FROM_NAME || "Example"
    },
    /**
     *
     */
    encryption: process.env.MAIL_ENCRYPTION || "tls",

    /**
     *
     */
    username: process.env.MAIL_USERNAME,
    password: process.env.MAIL_PASSWORD,

    /**
     *
     */
    secure: process.env.MAIL_SECURE || false,
};