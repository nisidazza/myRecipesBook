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
            ]))