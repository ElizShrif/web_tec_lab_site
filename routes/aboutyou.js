var express = require('express');
const session = require('express-session');
var router = express.Router();

var {sessionCheck} = require('../controllers/mainController');

/* GET users listing. */
router.get('/',sessionCheck, function(req, res, next) {
  res.render('aboutyou',
  {
    title:'About you',
    navig: 
    [
      {
        href:'home',
        text:'Главная',
        selected: false,
      },
      {
        href:'series',
        text:'Сериалы',
        selected: false,
      },
      {
        href:'',
        text:'Мультсериалы',
        selected: false,
      },
      {
        href:'',
        text:'Аниме',
        selected: false,
      },
      {
        href:'',
        text:'Дорамы',
        selected: false,
      },
      {
        href:'',
        text:'Кинофильмы',
        selected: false,
      },
      {
        href:'aboutyou',
        text:'О вас',
        selected: true,
      }
    ],
    user: req.session.user
  })
});

module.exports = router;