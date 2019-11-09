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
    //console.log(id)
    db.getRecipe(id)
        .then(recipe => {
            db.getIngredients(id)
                .then(ingredients => {
                    res.render('recipe', { recipe, ingredients })
                    console.log(recipe,ingredients)
                })
        })
})


module.exports = router