const heroes= require('./heroes')
const resolvers= {
    heroes: ()=> heroes,
    findHeroesByName: ({name})=> {

       return  heroes.filter(hero=> hero.name ==name)}
}

module.exports = resolvers;