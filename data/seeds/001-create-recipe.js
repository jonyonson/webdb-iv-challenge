exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('create_recipe')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('create_recipe').insert([
        {
          recipe_id: 2,
          ingredient_id: 1,
          ingredientQuantity: 2.0,
          ingredientUnit: 'slice',
        },
        {
          recipe_id: 2,
          ingredient_id: 2,
          ingredientQuantity: 1.0,
          ingredientUnit: 'Tbsp',
        },
        {
          recipe_id: 2,
          ingredient_id: 3,
          ingredientQuantity: 1.0,
          ingredientUnit: 'slice',
        },
        {
          recipe_id: 2,
          ingredient_id: 5,
          ingredientQuantity: 1.0,
          ingredientUnit: 'slice',
        },
      ]);
    });
};
