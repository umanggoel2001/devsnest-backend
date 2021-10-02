var express = require('express');
var router = express.Router();
var registerInitialCheck=require('../middlewares/registerChecks');
var register =require("../controllers/register");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//@email @lastname@ firstname @ password @confrim===body
//desc
//email valkidate
//password validate
//js injection(tha)

//check thr email---lvl 3
//password hash
//email in lowercase
//save
router.post('/register',registerInitialCheck,register);
module.exports = router;
