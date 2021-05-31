const Sequelize = require('sequelize');
const AboutYouRequestModel = require('./models/aboutyourequest');
const LoginModel = require('./models/autorisation');

//Подключение к БД SQLite
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "testappdb.sqlite"
});

//Создаем объект модели
const AboutYouRequest = AboutYouRequestModel(sequelize);
const Login = LoginModel(sequelize);

//Синхронизация моделей приложения с БД
var syncdb = function(){
    sequelize.sync().then(result=>{
    console.log("Syncing DataBase is done!");
})
  .catch(err=>console.log(err));
};

//экспорт функции синхронизации
module.exports = {
    syncdb,
    AboutYouRequest,
    Login
}
