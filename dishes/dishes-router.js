const router = require('express').Router();

const {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe,
} = require('./dishes-model.js');

router.get('/dishes', (req, res) => {
  getDishes()
    .then(dishes => {
      res.status(200).json(dishes);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/dishes', (req, res) => {
  addDish(req.body)
    .then(student => {
      res.status(200).json(student);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get('/dishes/:id', (req, res) => {
  getDish(req.params.id)
    .then(dish => {
      res.status(200).json(dish);
    })
    .catch(error => {
      res.status(200).json(error);
    });
});

router.get('/recipes', (req, res) => {
  getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/recipes', (req, res) => {
  addRecipe(req.body)
    .then(recipe => {
      res.status(201).json(recipe);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
``;
