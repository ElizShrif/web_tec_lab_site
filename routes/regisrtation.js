var express = require('express');
var router = express.Router();

// подключение необходимых ресурсов из контроллера
var  register_user  = require('../controllers/mainController');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('registration',
  {
    title:'Registration',
   
  })
});

router.post('/', register_user.register_user);
module.exports = router;