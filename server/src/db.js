require("dotenv").config();
const axios = require ('axios');
const { Sequelize } = require("sequelize");

const fs = require('fs');
const path = require('path');
const createCountrys = require('./models/Country');
const createActivitys = require('./models/Activity');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, {
  logging: false, 
  native: false, 
});
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);
createCountrys(sequelize);
createActivitys(sequelize);
const { Country } = sequelize.models;
const { Activity } = sequelize.models;


// Aca vendrian las relaciones
Country.belongsToMany(Activity, {through: 'country_activity'});
Activity.belongsToMany(Country, {through: 'country_activity'});




const createCountries = async ()=>{
  const arrCountries = (await axios.get('http://localhost:5000/countries')).data

  for(let i=0; i<arrCountries.length; i++){
     
        let  id= arrCountries[i].cca3;
        let name= arrCountries[i].name.common;
        let flags= arrCountries[i].flags.png;
        let continents= arrCountries[i].continents[0];
        let capital;
          if(arrCountries[i].hasOwnProperty("capital")){
             capital= arrCountries[i].capital[0];
          }else{
             capital = "no se especifico";
          }
          let area= arrCountries[i].area;
          let population= arrCountries[i].population;

        createCountriesDB(id, name, flags, continents, capital, area, population);     
}
 
}
 const createCountriesDB = async (id, name, flags, continents, capital, area, population)=>{  
   return await Country.create({id, name, flags, continents, capital, area, population});  
  
    //const aux2 = await Country.create({id, name, flags, continents, capital, area, population});
  
}



module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, 
  createCountries    // para importart la conexión { conn } = require('./db.js');
};