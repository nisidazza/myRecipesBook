const express = require('express')

const db = require('./db')

const router = express.Router()

router.get('/', (req, res) => {
    db.getListRecipes()
        .then(recipes => {
            //console.log(recipes)
            res.render('home', { recipes: recipes })
        })
        .catch(err => {
            res.status(500).send('DATABASE ERROR: ' + err.message)
        })
})

router.get('/recipe/:id', (req, res) => {
    let { id } = req.params
    let recipeInfo
    let recipeIngredients
    //console.log(id)
    db.getRecipe(id)
        .then(recipe => {
            recipeInfo = recipe
            db.getIngredients(id)
                .then(ingredients => {
                    recipeIngredients = ingredients
                    res.render('recipe', { recipeInfo, recipeIngredients })
                    // console.log(recipeInfo)
                    // console.log(recipeIngredients)
                })
        })
})

router.get('/addRecipe', (req, res) => {
    db.getListIngredients()
        .then(ingredients => {
            console.log(ingredients)
            res.render('addRecipe', { ingredients })
        })
})

router.post('/addRecipe', (req, res) => {
    console.log("POST addRecipe");
    console.log(req.body);

    const { title } = req.body
    const { category } = req.body
    const { link } = req.body
    const { notes } = req.body
    const { ingredient_ids } = req.body
    const { ingredient_quantities } = req.body
    db.addRecipe(title, category, link, notes)
        .then(newRecipeIdArray => {
            var newRecipeId = newRecipeIdArray[0]
            console.log("Recipe Id" + newRecipeId)
            db.linkRecipeIngredients(newRecipeId, ingredient_ids, ingredient_quantities)
                .then(() => {
                    res.redirect(`/recipe/${newRecipeId}`)
                })
        })
})

router.post('/recipe/:id', (req, res) => {
    const { id } = req.params
    console.log(id)
    db.deleteRecipe(id)
        .then(() => {
            db.getListRecipes()
                .then(() => {
                    res.redirect('/')
                })

        })
})




module.exports = router