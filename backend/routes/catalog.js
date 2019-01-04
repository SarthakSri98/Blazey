const express = require('express');
const router = express.Router();
const genreController = require('../controllers/genreController');
const topicController = require('../controllers/topicController');
const subTopicController = require('../controllers/subTopicController');



router.get('/genre/create',genreController.getGenre);

router.post('/genre/create',genreController.postGenre);

router.get('/topic/create',topicController.getTopic);

router.post('/topic/create/:id',topicController.postTopic);

module.exports = router;
