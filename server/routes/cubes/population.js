const express = require('express');
// const { graphDBEndpoint, dc } = require('../../config/dbconfig');
const router = express.Router();

const exOne2014 = {
    "head": {
        "vars": [
            "City",
            "Population",
            "Year"
        ]
    },
    "results": {
        "bindings": [
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "2155"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "An Giang"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1624"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Bắc Giang"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "307"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Bắc Kạn"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "877"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Bạc Liêu"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1131"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Bắc Ninh"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1059"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Bà Rịa - Vũng Tàu"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1262"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Bến Tre"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1514"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Bình Định"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "2155"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "An Giang"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1873"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Bình Dương"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "932"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Bình Phước"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1207"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Bình Thuận"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1216"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Cà Mau"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1238"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Cần Thơ"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "520.2"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Cao Bằng"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1833"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Đắk Lắk"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "519"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Đắk Nông"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1007"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Đà Nẵng"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "538"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Điện Biên"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "2838"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Đồng Nai"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1681"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Đồng Tháp"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "788"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Hà Giang"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1763"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Hải Dương"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1946"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Hải Phòng"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "799"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Hà Nam"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "7095"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Hà Nội"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1255"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Hà Tĩnh"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "768"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Hậu Giang"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "817"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Hoà Bình"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1158"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Hưng Yên"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1196"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Khánh Hoà"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1745"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Kiên Giang"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "484"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Kon Tum"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "415"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Lai Châu"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1259"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Lâm Đồng"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "753"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Lạng Sơn"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "665"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Lào Cai"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1477"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Long An"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1845"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Nam Định"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "3037"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Nghệ An"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "935"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Ninh Bình"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "590"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Ninh Thuận"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1360"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Phú Thọ"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "887"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Phú Yên"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "868"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Quảng Bình"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1471"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Quảng Nam"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1241"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Quảng Ngãi"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1199"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Quảng Ninh"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "616"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Quảng Trị"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1307"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Sóc Trăng"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1166"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Sơn La"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1104"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Tây Ninh"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1788"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Thái Bình"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1173"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Thái Nguyên"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "3496"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Thanh Hoá"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1131"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Thừa Thiên Huế"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1716"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Tiền Giang"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "7981"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "TP.Hồ Chí Minh"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1029"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Trà Vinh"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "753"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Tuyên Quang"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1041"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Vĩnh Long"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1041"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Vĩnh Phúc"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2014"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "783"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Yên Bái"
                }
            }
        ]
    }
}

const exOne2019 = {
    "head": {
        "vars": ["City", "Population", "Year"]
    },
    "results": {
        "bindings": [
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1907"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "An Giang"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1810"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Bắc Giang"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "314"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Bắc Kạn"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "908"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Bạc Liêu"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1378"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Bắc Ninh"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1152"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Bà Rịa - Vũng Tàu"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1289"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Bến Tre"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1487"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Bình Định"
                }
            },

            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "2456"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Bình Dương"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "997"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Bình Phước"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1232"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Bình Thuận"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1194"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Cà Mau"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1236"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Cần Thơ"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "530"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Cao Bằng"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1872"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Đắk Lắk"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "605"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Đắk Nông"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1007"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Đà Nẵng"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "601"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Điện Biên"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "3113"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Đồng Nai"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1598"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Đồng Tháp"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1520"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Gia Lai"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "858"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Hà Giang"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1896"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Hải Dương"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "2033"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Hải Phòng"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "854"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Hà Nam"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "8093"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Hà Nội"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1290"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Hà Tĩnh"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "732"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Hậu Giang"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "855"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Hoà Bình"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1255"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Hưng Yên"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1232"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Khánh Hoà"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1723"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Kiên Giang"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "543"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Kon Tum"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "462"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Lai Châu"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1299"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Lâm Đồng"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "772"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Lạng Sơn"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "733"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Lào Cai"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1695"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Long An"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1780"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Nam Định"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "3337"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Nghệ An"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "984"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Ninh Bình"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "591"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Ninh Thuận"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1466"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Phú Thọ"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "873"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Phú Yên"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "896"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Quảng Bình"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1497"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Quảng Nam"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1231"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Quảng Ngãi"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1324"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Quảng Ninh"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "633"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Quảng Trị"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1199"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Sóc Trăng"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1252"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Sơn La"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1171"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Tây Ninh"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1862"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Thái Bình"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1290"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Thái Nguyên"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "3645"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Thanh Hoá"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1129"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Thừa Thiên Huế"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1766"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Tiền Giang"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "7981"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "TP.Hồ Chí Minh"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1009"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Trà Vinh"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "786"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Tuyên Quang"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1022"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Vĩnh Long"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "1154"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Vĩnh Phúc"
                }
            },
            {
                "Year": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#int",
                    "type": "literal",
                    "value": "2019"
                },
                "Population": {
                    "datatype": "http://www.w3.org/2001/XMLSchema#double",
                    "type": "literal",
                    "value": "783"
                },
                "City": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Yên Bái"
                }
            }
        ]
    }
}




//getpopulationbyCityId
router.get('/population/city/yearid', (req, res) => {
    return res.json(ex1);
})

//getpopulationByYear
router.get('/population/year/2014', (req, res) => {
        return res.json(exOne2014);
})

router.get('/population/year/2019', (req, res) => {
    return res.json(exOne2019);
})

//getIndustryyCityYear
router.get('/population/city/:cityid/year/:year', (req, res) => {
    return res.json(ex1);
})

//getpopulationByCityPeriod
router.get('/population/city/:cityid/fyear/:fyear/tyear/:tyear', (req, res) => {
    return res.json(ex1); `	`
})


module.exports = router;