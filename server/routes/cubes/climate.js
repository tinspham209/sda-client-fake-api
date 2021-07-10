const express = require("express");
// const {graphDBEndpoint, dc} = require('../../config/dbconfig');
const router = express.Router();

const filterHue = {
  head: {
    vars: ["City", "Humidity", "Year"],
  },
  results: {
    bindings: [
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2006",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "85.0",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Huế",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2007",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "87.0",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Huế",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2008",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "87.6",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Huế",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2009",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "87.2",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Huế",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2010",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "87.1",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Huế",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2011",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "87.8",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Huế",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2012",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "85.0",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Huế",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2013",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "87.0",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Huế",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2014",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "85.4",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Huế",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2015",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "85.4",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Huế",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2016",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "86.8",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Huế",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2017",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "88.4",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Huế",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2018",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "86.3",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Huế",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2019",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "84.9",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Huế",
        },
      },
    ],
  },
};

const filterHanoi = {
  head: {
    vars: ["City", "Humidity", "Year"],
  },
  results: {
    bindings: [
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2006",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "78.0",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Hà Nội",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2007",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "78.0",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Hà Nội",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2008",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "79.3",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Hà Nội",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2009",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "76.9",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Hà Nội",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2010",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "77.7",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Hà Nội",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2011",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "77.3",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Hà Nội",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2012",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "78.5",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Hà Nội",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2013",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "78.0",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Hà Nội",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2014",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "78.5",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Hà Nội",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2015",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "78.3",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Hà Nội",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2016",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "73.9",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Hà Nội",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2017",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "76.6",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Hà Nội",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2018",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "75.0",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Hà Nội",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2019",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "75.3",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Hà Nội",
        },
      },
    ],
  },
};

const filterDN = {
  head: {
    vars: ["City", "Humidity", "Year"],
  },
  results: {
    bindings: [
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2006",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "81.0",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Đà Nẵng",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2007",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "82.0",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Đà Nẵng",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2008",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "82.0",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Đà Nẵng",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2009",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "81.0",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Đà Nẵng",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2010",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "82.4",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Đà Nẵng",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2011",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "80.8",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Đà Nẵng",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2012",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "79.9",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Đà Nẵng",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2013",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "81.0",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Đà Nẵng",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2014",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "80.6",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Đà Nẵng",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2015",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "80.7",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Đà Nẵng",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2016",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "80.6",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Đà Nẵng",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2017",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "81.8",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Đà Nẵng",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2018",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "79.1",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Đà Nẵng",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2019",
        },
        Humidity: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "78.1",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Đà Nẵng",
        },
      },
    ],
  },
};

const ex4 = {
  head: {
    vars: ["City", "Rainfall", "Year"],
  },
  results: {
    bindings: [
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2016",
        },
        Rainfall: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "2688.7",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Đà Nẵng",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2017",
        },
        Rainfall: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "2285.4",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Đà Nẵng",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2018",
        },
        Rainfall: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "2539.1",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Đà Nẵng",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2019",
        },
        Rainfall: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "2150.4",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Đà Nẵng",
        },
      },
    ],
  },
};

//getHumidityByCityIdz
router.get("/humidity/city/hue", (req, res) => {
  return res.json(filterHue);
});

router.get("/humidity/city/hanoi", (req, res) => {
  return res.json(filterHanoi);
});

router.get("/humidity/city/danang", (req, res) => {
  return res.json(filterDN);
});
//getHumidityByYear
router.get("/humidity/year/:year", (req, res) => {
  return;
});

//getHumidityByCityYear
router.get("/humidity/city/:cityid/year/:year", (req, res) => {
  return;
});

//getHumidityByCityPeriod
router.get("/humidity/city/:cityid/fyear/:fyear/tyear/:tyear", (req, res) => {
  return;
});

//getRainfallByCityId
router.get("/rainfall/city/:cityid", (req, res) => {
  return;
});

//getRainfallByYear
router.get("/rainfall/ex4", (req, res) => {
  return res.json(ex4);
});

//getRainfallByCityYear
router.get("/rainfall/city/:cityid/year/:year", (req, res) => {
  return;
});

//getRainfaillByCityPeriod
router.get("/rainfall/city/:cityid/fyear/:fyear/tyear/:tyear", (req, res) => {
  return;
});

//getTemperatureByCityId
router.get("/temperature/city/:cityid", (req, res) => {
  return;
});

//getTemperatureByYear
router.get("/temperature/year/:year", (req, res) => {
  return;
});

//getTemperatureByCityYear
router.get("/temperature/city/:cityid/year/:year", (req, res) => {
  return;
});

//getTemperatureByCityPeriod
router.get(
  "/temperature/city/:cityid/fyear/:fyear/tyear/:tyear",
  (req, res) => {
    return;
  }
);

module.exports = router;
