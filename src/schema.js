const  {buildSchema} = require('graphql')
const schema =buildSchema(`
type Hero{
    id: ID!
    name: String
    email:String
    group: [String!]
    }
type Query{
        heroes: [Hero!]
        findHeroesByName(name:String!): [Hero!]!
    }
`)
module.exports = schema;