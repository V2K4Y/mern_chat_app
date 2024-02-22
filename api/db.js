const mongoose = require('mongoose')

const connectMongo = (URL) => {
    return mongoose.connect(URL);
}

module.exports = {connectMongo}

