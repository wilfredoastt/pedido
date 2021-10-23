const FoodController = require('../controllers/food_controller');
const express = require('express');
const router = express.Router();

router.get('/foods', FoodController.getFoods);
router.post('/save-food', FoodController.saveFood);
router.put('/update-food/:_id', FoodController.updateFood);
router.delete('/delete-food/:_id', FoodController.deleteFood);

module.exports = router;
