const { AboutYouRequest, Login } = require('../sequelize');
const bcrypt = require('bcrypt');       // подключаем крипто-библиотеку для валидации пароля

// Функция для проверки авторизации пользователя
exports.sessionCheck = (req, res, next) => {
  // Если не установлен параметр сессии user или значение cookie 'AuthToken' не равно логину пользователя
  if (!req.session.user || req.cookies['AuthToken'] != req.session.user) {
      // переадресуем на страницу /autorisation
      res.redirect('/autorisation');
  } else {
      // иначе исполняем следующую функцию обработчика
      next();
  }    
};

// Показать список всех запросов.
exports.get_contact_req_all = function(req, res) {
    AboutYouRequest.findAll({ raw: true })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Показать запрос по id.
exports.get_contact_req_by_id = function(req, res) {
    AboutYouRequest.findByPk(req.params.id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
};

// Показать запрос по имени автора.
exports.get_contact_req_by_firstname = function(req, res) {
    AboutYouRequest.findAll({ where: { familia: req.query.familia } })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
        res.status(500).json({ message: err.message });
    });
};

//создаем новый запрос GET
exports.create_contact_req=function(req,res){
 if(!req.body.name || !req.body.email){
     res.status(400).json({message: "Data validation error!"});
     return;
 }

    // Создаем объект AboutYouRequest из json-данных
    var newAboutYouRequest = {
        familia: req.body.fam,
        im: req.body.name,
        otc: req.body.ot,
        film: req.body.film,
        serie: req.body.serial,
        email: req.body.email
    };

    // Записываем объект в БД
    AboutYouRequest.create(newAboutYouRequest)
    .then(data => {
      var message = `Спасибо, ${req.body.fam} ${req.body.name} ${req.body.ot}, что помогли в развитии сайта!`
      res.send(message)
        //res.json({ message: "AboutYouRequest Created!" });
      })
      .catch(err => {
          res.status(500).json({ message: err.message });
    });
};
  
// Удалить запрос по id в таблице DELETE
exports.delete_contact_req_by_id = function(req, res) {
    AboutYouRequest.destroy({ where: { id: req.params.id } })
    .then(data => {
      res.json({ message: "AboutYouRequest Deleted!" });
    })
    .catch(err => {
        res.status(500).json({ message: err.message });
    });
};
  
// Обновить текст запроса по id в таблице PUT
exports.update_contact_req_by_id = function(req, res) {
    // Проверяем полученные данные на наличие обязательного поля 
    if (!req.body.fam) {
      res.status(400).json({ message: "Data validation error!" });
    return;
    }
    // Обновляем запись в БД
    AboutYouRequest.update({ familia: req.body.fam }, { where: { id: req.params.id } })
    .then(data => {
      res.json({ message: "AboutYouRequest Updated!" });
    })
    .catch(err => {
        res.status(500).json({ message: err.message });
    });
};

// Валидация пользователя по логину и паролю
exports.login_user = function(req, res) {
  // Получаем логин и пароль из данных формы
  var username = req.body.loginField;
  var password = req.body.passField;
  // Ищем пользователя в БД
  Login.findOne({ where: { username: username } }).then(user => {
      // если пользователь не найден переадресуем на страницу /login
      if (!user) {
          res.redirect('/autorisation');
      // если пользователь найден, проверяем пароль
      } else if (!bcrypt.compareSync(password, user.password)) {
          // если пароль не прошел проверку, переадресуем на страницу /login
          res.redirect('/autorisation');
      } else {
          // иначе регистрируем сессию пользователя (записываем логин пользователя в параметр user)
          req.session.user = user.username;
          // высылаем сессионную cookie AuthToken с логином
          res.cookie('AuthToken', user.username);
          res.redirect('/');
      }
  })
  .catch(err => {
      // в случае исключения возвращаем код 500 + json-ответ с ошибкой
      res.status(500).json({ message: err.message });
  });
}

// Создание нового аккаунта
exports.register_user = function(req, res) {
  // Создаем хеш пароля с солью
  const salt = bcrypt.genSaltSync();
  var hashed = bcrypt.hashSync(req.body.passField, salt);
  // Создаем объект Login из данных формы
  var newLogin = {
      username: req.body.loginField,
      password: hashed
  };
  // Записываем объект в БД
  Login.create(newLogin)
  .then(user => {
      console.log(`Registered as ${user.username}`);
      // в случае успешной записи переадресуем пользователя на страницу авторизации
      res.redirect('/');
  })
  .catch(err => {
      // в случае исключения возвращаем код 500 + json-ответ с ошибкой
      res.status(500).json({ message: err.message });
  });
};