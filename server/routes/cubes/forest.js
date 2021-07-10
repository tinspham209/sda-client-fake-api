const express = require('express');
// const {graphDBEndpoint, dc} = require('../../config/dbconfig');
const router = express.Router();

//getafforestationbyCityId
router.get('/afforestation/city/:cityid', (req, res) => {
    return;
})

//getafforestationByYear
router.get('/afforestation/year/:year', (req, res) => {
    return;
})

//getAfforestationByCityYear
router.get('/afforestation/city/:cityid/year/:year', (req, res) => {
    return;
})

//getAfforestationByCityPeriod
router.get('/afforestation/city/:cityid/fyear/:fyear/tyear/:tyear', (req, res) => {
    return;
})

//getaforestcoverbyCityId
router.get('/forestcover/city/:cityid', (req, res) => {
    return;
})

//getforestcoverByYear
router.get('/forestcover/year/:year', (req, res) => {
    return;
})

//getForestcoverByCityYear
router.get('/forestcover/city/:cityid/year/:year', (req, res) => {
    return;
})

//getForestcoverByCityPeriod
router.get('/forestcover/city/:cityid/fyear/:fyear/tyear/:tyear', (req, res) => {
    return;
})

module.exports = router;