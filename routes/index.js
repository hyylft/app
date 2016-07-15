var express = require('express');
var router = express.Router();
var views = '../views/';
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(views+'myIndex.html',routes);
});

module.exports = router;
