exports.seed = knex =>
    knex('ingredients').del()
        .then(() =>
            knex('ingredients').insert([
                {
                    id: 1,
                    name: 'flour',
                },
                {
                    id: 2,
                    name: 'sugar',
                },
                {
                    id: 3,
                    name: 'baking powder',
                },
                {
                    id: 4,
                    name: 'salt',
                },
                {
                    id: 5,
                    name: 'egg',
                },
                {
                    id: 6,
                    name: 'milk',
                },
                {
                    id: 7,
                    name: 'vegetable oil',
                },
            ]))