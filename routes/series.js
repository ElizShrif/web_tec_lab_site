var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('series',
  {
    title:'Series',
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
        selected: true,
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
        selected: false,
      }
    ],
     spisok:
     [
     {
        text:'Netflix',
     },
     {
      text:'Hulu',
     },
     {
      text:'КиноПоиск HD',
     },
     {
      text:'Amediateka',
     },
     ]
  })
});

module.exports = router;
