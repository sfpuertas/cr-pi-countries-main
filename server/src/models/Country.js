const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id: {
      
      type: DataTypes.STRING(3),
      primaryKey: true,
  },
    name: {
      type: DataTypes.STRING,
    },
    flags: {
      type: DataTypes.STRING,
    },
    continents: {
      type: DataTypes.STRING,
    },
    capital: {
      type: DataTypes.STRING,
    },
    subRegion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.DECIMAL
    },
    population: {
      type: DataTypes.INTEGER,

    }
  });
};