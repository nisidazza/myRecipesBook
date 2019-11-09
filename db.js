const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getListRecipes(db=connection) {
    return db('recipes')
    .select()
}

function getIngredients(id, db=connection) {
    return db.select('ingredients.name AS ingredient_name', 'recipes_ingredients.quantity AS ingredient_quantity')
    .from('recipes')
    .innerJoin('recipes_ingredients', 'recipes_ingredients.recipe_id', 'recipes.id')
    .innerJoin('ingredients', 'recipes_ingredients.ingredient_id', 'ingredients.id')
    .where('recipes.id', id)
}

function getRecipe(id, db=connection) {
    return db('recipes')
    .where('id', id).first()
    
}



module.exports = {
    getListRecipes,
    getRecipe,
    getIngredients
}