var express = require('express');
var router = express.Router();

/* GET users listing. */
/**
 * @swagger
 * /deployTest:
 *    get:
 *      description: Outputs a line saying the service was 
 *        deployed successfully
 *      responses:
 *        '200':
 */
router.get('/', function(req, res, next) {
  res.json('Service successfully deployed via GitHub Actions');
});

module.exports = router;
