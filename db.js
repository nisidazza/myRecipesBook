const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getListRecipes(db=connection) {
    return db('recipes')
    .select()
}

function getRecipe(id, db=connection) {
    return db.select('recipes.*',' ingredients.*')
    .from('recipes')
    .leftJoin('recipes_ingredients', 'recipes_ingredients.recipe_id', 'recipes.id')
    .leftJoin('ingredients', 'recipes_ingredients.ingredient_id', 'ingredients.id')
}



module.exports = {
    getListRecipes,
    getRecipe
}