const express = require('express');
const router = express.Router();
const genreController = require('../controllers/genreController');
const topicController = require('../controllers/topicController');
const subTopicController = require('../controllers/subTopicController');



router.get('/genre/create',genreController.getGenre);

router.post('/genre/create',genreController.postGenre);

router.delete('/genre/delete/:idG' , genreController.deleteGenre);

router.get('/topic/create',topicController.getTopic);

router.post('/topic/create/:id',topicController.postTopic);

router.delete('/topic/delete/:idG/:idT',topicController.deleteTopic);

router.get('/subtopic/create',subTopicController.getSubTopic);

router.post('/subtopic/create/:id/:idT',subTopicController.postSubTopic);

router.delete('/subtopic/delete/:idT/:idS',subTopicController.deleteSubTopic);
module.exports = router;
