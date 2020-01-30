var express = require('express');
var router = express.Router();

/* GET users listing. */
/**
 * @swagger
 * /users:
 *    get:
 *      description: This should output 'Test'
 *      responses:
 *        '200':
 */
router.get('/', function(req, res, next) {
  res.json('Test');
});

module.exports = router;
