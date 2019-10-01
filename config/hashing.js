require("dotenv").config();
module.exports = {
    /**
     *
     */
    bcrypt: {
        rounds: process.env.BCRYPT_ROUNDS || 10
    }
};