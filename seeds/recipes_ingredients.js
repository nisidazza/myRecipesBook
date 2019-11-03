exports.seed = knex =>
    knex('recipes_ingredients').del()
        .then(() =>
            knex('recipes_ingredients').insert([
                {
                    recipe_id: 1,
                    ingredient_id: 1,
                    quantity: '1 cup'
                },
                {
                    recipe_id: 1,
                    ingredient_id: 2,
                    quantity: '2 tablespoons'
                },
                {
                    recipe_id: 1,
                    ingredient_id: 3,
                    quantity: '2 tablespoons'
                },
                {
                    recipe_id: 1,
                    ingredient_id: 4,
                    quantity: '1 tablespoon'
                },
                {
                    recipe_id: 1,
                    ingredient_id: 5,
                    quantity: '1'
                },
                {
                    recipe_id: 1,
                    ingredient_id: 6,
                    quantity: '1 cup'
                },
                {
                    recipe_id: 1,
                    ingredient_id: 7,
                    quantity: '2 tablespoons'
                },

            ]))