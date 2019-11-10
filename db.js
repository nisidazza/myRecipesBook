const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)


function getListRecipes(db = connection) {
    return db('recipes')
        .select()
}

function getIngredients(id, db = connection) {
    return db.select('ingredients.name AS ingredient_name', 'recipes_ingredients.quantity AS ingredient_quantity')
        .from('recipes')
        .innerJoin('recipes_ingredients', 'recipes_ingredients.recipe_id', 'recipes.id')
        .innerJoin('ingredients', 'recipes_ingredients.ingredient_id', 'ingredients.id')
        .where('recipes.id', id)
}

function getRecipe(id, db = connection) {
    return db('recipes')
        .where('id', id).first()

}

function addRecipe(title, category, link, notes, db = connection) {
    return db('recipes')
        .insert({
            title,
            category,
            link,
            notes
        })
}

function addIngredients(name, db = connection) {
    return db('ingredients')
        .insert({ name })
}

function linkRecipeIngredients(recipe_id, ingredient_id, quantity, db = connection) {
    return db('recipes_ingredients')
        .insert({
            recipe_id,
            ingredient_id,
            quantity
        })
}

module.exports = {
    getListRecipes,
    getRecipe,
    getIngredients,
    addRecipe,
    addIngredients,
    linkRecipeIngredients
}