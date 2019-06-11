const db = require('../data/dbConfig.js');

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe,
};

function getDishes() {
  return db('dishes');
}

function addDish(dish) {
  return db('dishes').insert(dish);
}

function getDish(id) {
  return db('recipes')
    .join('dishes', 'dishes.id', 'recipes.dish_id')
    .select(
      'recipes.id',
      'recipes.name as recipe names',
      'dishes.name as dish name'
    )
    .where('recipes.id', id);
}

function getRecipes() {
  return db('recipes');
}

function addRecipe(recipe) {
  return db('recipes').insert(recipe);
}
