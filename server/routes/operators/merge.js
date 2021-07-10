const bodyParser = require("body-parser");
const express = require("express");
// const {graphDBEndpoint, dc} = require('../../config/dbconfig');
const router = express.Router();

const ex5 = {
  head: {
    vars: ["City", "Year", "Industry", "Temperature"],
  },
  results: {
    bindings: [
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2012",
        },
        Industry: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "105.0",
        },
        Temperature: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "24.3",
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
        Industry: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "104.5",
        },
        Temperature: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "24.4",
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
        Industry: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "104.2",
        },
        Temperature: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "24.6",
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
        Industry: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "108.3",
        },
        Temperature: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "25.3",
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
        Industry: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "107.3",
        },
        Temperature: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "25.2",
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
        Industry: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "107.0",
        },
        Temperature: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "25.1",
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
        Industry: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "106.9",
        },
        Temperature: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "25.1",
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
        Industry: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "108.5",
        },
        Temperature: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "25.9",
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

const ex6 = {
  head: {
    vars: ["City", "Year", "Industry", "forestCoverArea", "Population"],
  },
  results: {
    bindings: [
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2016",
        },
        Industry: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "122.7",
        },
        forestCoverArea: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "360.8",
        },
        Population: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "529.8",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Cao Bằng",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2017",
        },
        Industry: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "138.9",
        },
        forestCoverArea: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "360.8",
        },
        Population: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "535.4",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Cao Bằng",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2018",
        },
        Industry: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "126.3",
        },
        forestCoverArea: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "367.9",
        },
        Population: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "540.4",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Cao Bằng",
        },
      },
      {
        Year: {
          datatype: "http://www.w3.org/2001/XMLSchema#int",
          type: "literal",
          value: "2019",
        },
        Industry: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "108.5",
        },
        forestCoverArea: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "373.3",
        },
        Population: {
          datatype: "http://www.w3.org/2001/XMLSchema#double",
          type: "literal",
          value: "530.9",
        },
        City: {
          "xml:lang": "en",
          type: "literal",
          value: "Cao Bằng",
        },
      },
    ],
  },
};

//merge2datacubes
router.get("/ex5", (req, res) => {
  return res.json(ex5);
});

//merge3datacubes
router.get("/ex6", (req, res) => {
  return res.json(ex6);
});

module.exports = router;
