const express = require('express');
const router = express.Router();
const storyController = require('../controllers/storyController');

// Rute akan terhubung ke fungsi di controller
router.get('/', storyController.getAllStories);
router.post('/', storyController.createStory);

module.exports = router;