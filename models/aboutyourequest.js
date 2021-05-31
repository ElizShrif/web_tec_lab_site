const { Sequelize }=require('sequelize');

module.exports = (sequelize)=>{
return sequelize.define('aboutyourequest', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      familia:{
        type: Sequelize.STRING,
        allowNull: true,
      }, 
      im:{
        type: Sequelize.STRING,
        allowNull: false
      },
      otc:{
        type: Sequelize.STRING,
        allowNull: true
      },
      film:{
        type: Sequelize.STRING,
        allowNull: false
      },
      serie:{
        type: Sequelize.STRING,
        allowNull: false
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false
      },
})
}