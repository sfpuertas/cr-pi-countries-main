const axios = require("axios");
const server = require("./src/server");
const { conn, createCountries } = require('./src/db.js');
const PORT = 3001;


conn.sync({ force: true }).then(() => {
server.listen(PORT, () => {
  createCountries();
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
