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
                {
                    recipe_id: 2,
                    ingredient_id: 8,
                    quantity: '1 cup'
                },
                {
                    recipe_id: 2,
                    ingredient_id: 7,
                    quantity: '1 tablespoon'
                },
                {
                    recipe_id: 2,
                    ingredient_id: 9,
                    quantity: '1'
                },
                {
                    recipe_id: 2,
                    ingredient_id: 10,
                    quantity: '1/8 cup'
                },
                {
                    recipe_id: 2,
                    ingredient_id: 11,
                    quantity: '2'
                },
                {
                    recipe_id: 2,
                    ingredient_id: 12,
                    quantity: '3'
                },
                {
                    recipe_id: 2,
                    ingredient_id: 13,
                    quantity: '2 tablespoons'
                },
                {
                    recipe_id: 2,
                    ingredient_id: 4,
                    quantity: 'q.s'
                },
                {
                    recipe_id: 2,
                    ingredient_id: 14,
                    quantity: '5/8 cup'
                },
                {
                    recipe_id: 2,
                    ingredient_id: 15,
                    quantity: 'q.s'
                },
                {
                    recipe_id: 2,
                    ingredient_id: 16,
                    quantity: '1/8 cup'
                },
                {
                    recipe_id: 2,
                    ingredient_id: 17,
                    quantity: 'q.s'
                },

            ]))