var express = require('express');
var router = express.Router();

// подключение необходимых ресурсов из контроллера
var  login_user  = require('../controllers/mainController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('autorisation',
  {
    title:'Autorisation',
   
  })
});

// Проверка корректного ввода логина и пароля
router.post('/', (req, res) => {
  // Если данные отправлены НЕ через кнопку "Регистрация"
  if (!req.body.regBtn) {
    // выполняем авторизацию
    login_user.login_user(req, res);
  }
  // иначе переадресуем на страницу регистрации
  else res.redirect('/registration');
});


module.exports = router;