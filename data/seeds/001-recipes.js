exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          name: 'Apple Pie',
          instructions: 'put apples in a pie crust and bake',
          dish_id: 3,
        },
        {
          name: 'Pineapple Pizza',
          instructions: 'put pinapple on pizza and bake',
          dish_id: 1,
        },
        {
          name: 'Ham Sandwhich',
          instructions: 'put ham between bread',
          dish_id: 2,
        },
      ]);
    });
};
