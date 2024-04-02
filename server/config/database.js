const mongoose = require('mongoose')
// const colours = require('colors')

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI)

    console.log(`MongoDB Conneceted: ${conn.connection.host}`.underline.bold.cyan);
}

module.exports = connectDB