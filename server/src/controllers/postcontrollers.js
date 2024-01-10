const { Activity, Country, country_activity} = require('../db');

const createActivitiesDB = async (name, dificultad, duracion, temporada, paises) =>{
   const aux = await Activity.create({name, dificultad, duracion, temporada});
   for (let i = 0; i<paises.length;i++){
      let CountryId = paises[i];
      let ActivityId = aux.id;
      await country_activity.create({CountryId,ActivityId});
   }
   return aux;
};

const createCountriesDB = async (id, name, flags, continents, capital, area, population) =>{
    return await Country.create({id, name, flags, continents, capital, area, population});
 };


module.exports = {createActivitiesDB, createCountriesDB};

