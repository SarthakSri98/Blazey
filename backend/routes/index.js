
var express = require('express');
var router = express.Router();


/// BOOK ROUTES ///

// GET catalog home page.
router.get('/', function(req, res) {
    res.redirect('/catalog');
  });

  module.exports = router;