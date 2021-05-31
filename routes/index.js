var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
  {
    title:'Home',
  blocList:
  [
    {
      href:'series',
      imgblack: 'image/bloc11.jpg',
      imgcolor: 'image/bloc1.jpg',
      width: 70,
      text: 'В данном разделе приведены подборки сералов, которые мы рекомендуем к просмотру.',
      class: 'bloc1',
    },
    {
      href:'',
      imgblack: 'image/bloc22.jpg',
      imgcolor: 'image/bloc2.jpg',
      width: 70,
      text: 'В данном разделе приведены подборки мультфильмов, которые мы рекомендуем к просмотру.',
      class: 'bloc1',
    },
    {
      href:'',
      imgblack: 'image/bloc33.jpg',
      imgcolor: 'image/bloc3.jpg',
      width: 70,
      text: 'В данном разделе приведены подборки аниме, которые мы рекомендуем к просмотру.',
      class: 'bloc1',
    },
    {
      href:'',
      imgblack: 'image/bloc44.jpg',
      imgcolor: 'image/bloc4.jpg',
      width: 68,
      text: 'В данном разделе приведены подборки дорам, которые мы рекомендуем к просмотру. Здесь вы найдете дораму по своему вкусу.',
      class: 'bloc',
    },
    {
      href:'',
      imgblack: 'image/bloc55.jpg',
      imgcolor: 'image/bloc5.jpg',
      width: 68,
      text: 'В данном разделе приведены подборки кинофильмов, которые мы рекомендуем к просмотру.',
      class: 'bloc',
    }
  ],
  navig: 
  [
    {
      href:'home',
      text:'Главная',
      selected: true,
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
      selected: false,
    }
  ],
 
  });
});

router.post('/api', function(req, res, next) {
  var message = `Спасибо, ${req.body.fam} ${req.body.name} ${req.body.ot}, что помогли в развитии сайта!`
  res.send(message)
});
module.exports = router;
