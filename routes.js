const express = require('express')

const db = require('./db')

const router = express.Router()

router.get('/', (req, res) => {
    db.getListRecipes()
        .then(recipes => {
            console.log(recipes)
            res.render('home', {recipes:recipes})
        })
        .catch(err => {
            res.status(500).send('DATABASE ERROR: ' + err.message)
        })
})

module.exports = router