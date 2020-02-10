const express  = require('express');
const GraphQLHttp  = require('express-graphql');
const schema = require('./schema');
//Express it self
const app = express();

//Adding Resovers
const resolvers = require('./resolvers');

//Router with GraphQL
app.use('/graph', GraphQLHttp({
        schema: schema ,
        rootValue:resolvers,
        graphiql:true
}))

app.listen(4000)