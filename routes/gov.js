var express = require('express');
var router = express.Router();

/* GET gov. */
router.get('/gov', function(req, res, next) {
     console.log('GOV...');
  res.render('gov', { title: 'Goverment' });
});

module.exports = router;
