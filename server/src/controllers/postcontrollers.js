const { Activity, Country} = require('../db');

const createActivitiesDB = async (name, dificultad, duracion, temporada) =>{
   return await Activity.create({name, dificultad, duracion, temporada});
};

const createCountriesDB = async (id, name, flags, continents, capital, area, population) =>{
    return await Country.create({id, name, flags, continents, capital, area, population});
 };


module.exports = {createActivitiesDB, createCountriesDB};

