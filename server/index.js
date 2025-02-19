const express = require('express')
const colours = require('colors')
require('dotenv').config()
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const connectDB = require('./config/database')
PORT = process.env.PORT || 5000

const app = express()

connectDB()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql : process.env.NODE_ENV === 'development' 
}))
app.listen(PORT, console.log(`Server running on port ${PORT}`))