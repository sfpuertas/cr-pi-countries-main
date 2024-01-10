const { Country, Activity,country_activity } = require('../db');
const {Op} = require ('sequelize');

const allCountrysDB = async () =>{
   const aux = await Country.findAll();
   return(aux);
};

const detailCountryDB = async(id)=>{
   const aux = await Country.findByPk(id, {include:[{model : Activity, attributes: ["name","dificultad","temporada","duracion"],through:{attributes: []} }]});
   if(aux === null){
      return('el pais no existe');
   }else{
      
      return(aux);
   }
}

const allActivitiesDB = async ()=> {
   const aux = await Activity.findAll();
   return(aux);
}

const nameCountryDB = async (name)=>{
   name= name.charAt(0).toUpperCase() + name.slice(1);
   const aux = await Country.findAll({where :{name :{[Op.like] : `%${name}%`}}});
   if(!aux.length){
      return([]);
   }
   return(aux)
}
module.exports = { allCountrysDB, detailCountryDB, allActivitiesDB, nameCountryDB };