const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    dificultad: {
        type: DataTypes.INTEGER,
        validate: {min: 1, max: 5},
        allowNull: false
      },
      duracion: {
        type: DataTypes.DECIMAL,
        validate: {min: 0}
      },
      temporada: {
        type: DataTypes.ENUM('verano', 'otoño', 'invierno', 'primavera'),
        allowNull: false
      }
  });
};