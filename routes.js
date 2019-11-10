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
    res.render('addRecipe')
})

router.post('/addRecipe', (req,res) => {
    let {title} = req.body
    let {category} = req.body
    let {link} = req.body
    let {notes} = req.body
    db.addRecipe(title,category,link,notes)    
    .then(newRecipeId => {
        console.log(newRecipeId)
        res.redirect(`/recipe/${newRecipeId}`)
        //db.addIngredients(name)// se esiste gia'?
        /*.then(() => {            
            db.linkRecipeIngredients(recipe_id, ingredient_id, quantity)
            .then(() => {
                
            })
        })
        */
    })
})


module.exports = router