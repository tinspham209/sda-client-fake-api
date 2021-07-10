const express = require('express');
// const {graphDBEndpoint, dc} = require('../../config/dbconfig');
const router = express.Router();

//getIndustryByCityId
router.get('/industry/city/:cityid', (req, res) => {
    return;
})

//getIndustryByYear
router.get('/industry/year/:year', (req, res) => {
    return;
})

//getIndustryyCityYear
router.get('/industry/city/:cityid/year/:year', (req, res) => {
    return;
})

//getIndustryByCityPeriod

router.get('/industry/city/:cityid/fyear/:fyear/tyear/:tyear', (req, res) => {
    return;
})

module.exports = router;