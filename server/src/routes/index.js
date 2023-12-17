const { Router } = require("express");
const {allCountrys, detailCountry, allActivities} = require ('../handlers/getHandlers');
const {createActivities, createCountries} = require ('../handlers/postHandlers')

const router = Router();

router.get("/countries", allCountrys);

router.get("/countries/:id", detailCountry);

//router.get("/countries", nameCountrys);

router.get("/activities", allActivities);

router.post("/activities", createActivities);
router.post("/countries", createCountries);

module.exports = router;
