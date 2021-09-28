const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb+srv://aayush:test123@gql-0.s25gr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
mongoose.connection.once('open', ()=>{
    console.log('connected to mongo');
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, ()=>{
    console.log('Listening for requests on 4000');
})