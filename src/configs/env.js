const dotenv = require('dotenv');

const config = dotenv.config({
    path: '.env'
});

module.exports = {
    config
};