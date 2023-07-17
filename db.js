const mongoose = require('mongoose');

require('dotenv').config()
//console.log(process.env)

const connectio = mongoose.connect(process.env.baseUrl);

module.exports = {connectio};