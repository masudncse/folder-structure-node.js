require("dotenv").config();
module.exports = {
    mailgun: {
        domain: process.env.MAILGUN_DOMAIN,
        secret: process.env.MAILGUN_SECRET,
        endpoint: process.env.MAILGUN_ENDPOINT || 'api.mailgun.net',
    }
};