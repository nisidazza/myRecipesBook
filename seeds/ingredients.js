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
                    name: 'extra-vergin olive oil',
                },
                {
                    id: 8,
                    name: 'chicken or vegetable broth',
                },
                {
                    id: 9,
                    name: 'onion',
                },
                {
                    id: 10,
                    name: 'butter',
                },
                {
                    id: 11,
                    name: 'clove garlic',
                },
                {
                    id: 12,
                    name: 'mushroom',
                },
                {
                    id: 13,
                    name: 'parsley',
                },
                {
                    id: 14,
                    name: 'rice',
                },
                {
                    id: 15,
                    name: 'white wine',
                },
                {
                    id: 16,
                    name: 'parmesan',
                },
                {
                    id: 17,
                    name: 'pepper',
                },
                {
                    id: 18,
                    name: 'yeast',
                },
                {
                    id: 19,
                    name: 'tomato sauce',
                },
                {
                    id: 20,
                    name: 'ham',
                },
                {
                    id: 21,
                    name: 'mozzarella',
                },
                {
                    id: 22,
                    name: 'king prawns',
                },
                {
                    id: 23,
                    name: 'basil',
                },
                {
                    id: 24,
                    name: 'water',
                },
            ]))