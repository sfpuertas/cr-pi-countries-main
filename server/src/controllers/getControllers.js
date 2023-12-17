const { Country } = require('../db');

const allCountrysDB = async () =>{
   const aux = await Country.findAll();
   return(aux);
};


module.exports = { allCountrysDB };