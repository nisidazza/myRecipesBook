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

router.get('/addRecipe', (req,res) => {
    db.getListIngredients()
        .then(ingredients => {
            console.log(ingredients)
            res.render('addRecipe',{ ingredients })
        })    
})

router.post('/addRecipe', (req,res) => {
    console.log("POST addRecipe");
    console.log(req.body);

    let {title} = req.body
    let {category} = req.body
    let {link} = req.body
    let {notes} = req.body
    let {ingredient_ids} = req.body
    let {ingredient_quantities} = req.body
    db.addRecipe(title,category,link,notes)    
    .then(newRecipeIdArray => {
        var newRecipeId = newRecipeIdArray[0]
        console.log("Recipe Id" + newRecipeId)
        db.linkRecipeIngredients(newRecipeId, ingredient_ids, ingredient_quantities)
        .then(() => {
            res.redirect(`/recipe/${newRecipeId}`)
        })                
    })
})


module.exports = router