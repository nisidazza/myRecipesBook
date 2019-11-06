exports.seed = knex =>
    knex('recipes').del()
        .then(() =>
            knex('recipes').insert([
                {
                    id: 1,
                    title: 'Pancakes',
                    category: 'sweet',
                    is_complete: true,
                    notes: 'delicious!',
                    link: 'https://www.allrecipes.com/recipe/45396/easy-pancakes/'
                },
                {
                    id: 2,
                    title: 'Mushroom Risotto',
                    category: 'savoury',
                    is_complete: true,
                    notes: 'add butter at the end and stir',
                    link: 'https://www.delish.com/cooking/recipe-ideas/recipes/a55215/easy-mushroom-risotto-recipe/'
                },
                {
                    id: 3,
                    title: 'Stir-Fried Udon Noodles',
                    category: 'savoury',
                    is_complete: true,
                    notes: 'add shrimp paste and spring onions',
                    link: 'https://www.foodandwine.com/recipes/stir-fried-udon-noodles'
                },


            ]))