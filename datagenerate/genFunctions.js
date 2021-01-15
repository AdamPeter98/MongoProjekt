var randomName = function () {
    // Base 36 uses letters and digits to represent a number:
    return (Math.random() + 1).toString(36).substring(2);
}

var day = 1000 * 60 * 60 * 24;
var randomDate = function () {
    return new Date(Date.now() - (Math.floor(Math.random() * day)));
}

var getRandomArbitrary = function (min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

var randomKep = function () {
    // Base 36 uses letters and digits to represent a number:
    return (Math.random() + 1).toString(16).substring(2) + ".png";
}

var random_boolean = function () { return Math.random() < 0.8; }

var random_k = function (start, finish) {
    var index = getRandomArbitrary(start, finish);
    var k = ["pancel", "varazsellenallas", "sebzes", "varazsero", "toltesiidocsokkentes", "tamadasisebesseg", "mozgasisebesseg", "mana", "energia", "duh", "manaregen", "hpregen", "hp", "kitartas", "eletlopas", "eletvarazs"]
    return k[index];
}


var getRandomNameItemId = function () {
    return db.Item.findOne({ ar: { $eq: getRandomArbitrary(0, 4000) } }, { "_id": 1 })._id.toString()
}

var getRandomNameItemId = function () {
    return db.Item.findOne({ ar: { $eq: getRandomArbitrary(0, 4000) } }, { "_id": 1 })._id.toString()
}
var getRandomNameJatekomd = function () {
    return db.Hos.findOne({ schema_version: { $eq: 1 } }).nev
}
for (var i = 1; i <= 34230; i++) {
    db.Hos.deleteOne({ nev: getRandomNameJatekomd() })
}

var getRandomHosName = function () {
    return db.Hos.findOne({ ar: { $eq: getRandomArbitrary(450, 6300) } }, { "nev": 1 }).nev.toString()
}

var getItems = function () {
    return db.Item.aggregate([
        {
           $match: {
               ar: {$gt: 3800 }
                   },
       },{
           $sort:{
               ar:-1
           }
       }
           ])
       
}

var itemPerformance = function () {
    var sDate = Date();
   var res = db.Item.aggregate([
        {
           $match: {
               ar: {$gt: 3700 }
                   },
       },{
           $sort:{
               ar:-1
           }
       }
           ])
    var fDate = Date(); 

    return res+sDate+" "+fDate
}

/*
Attributum minta  - Item
Adatismetles - Hos.nev->Kiralysag.ottJartHos Jatekos.kedvenchos->Hos
Extended reference - jatekmodban a hos neve
Computed - Hos -> meccsek szama
Séma verzió - minden

Hivatkozas targykeszletben hos objectid
*/

//splesartok
for (var i = 1; i <= 1000; i++) {
    db.Splesartok.insert(
        {
            "nev": randomName(),
            "schema_version": 1,
            "kepfile": randomKep(),
            "it_jart_hosok": [
                {
                    "nev": getRandomHosName()
                },
                {
                    "nev": getRandomHosName()
                },
                {
                    "nev": getRandomHosName()
                },
                {
                    "nev": getRandomHosName()
                }
            ]
        }
    );
}

//hos
for (var i = 1; i <= 1000000; i++) {
    db.Hos.insert(
        {
            "nev": randomName(),
            "schema_version": 1,
            "leiras": randomName(),
            "ar": getRandomArbitrary(450, 6300),
            "meccsekSzam": getRandomArbitrary(0, 10000),
            "kinezetek": [
                {
                    "nev": randomName(),
                    "kepfile": randomKep(),
                    "ar": getRandomArbitrary(250, 5000)
                },
                {
                    "nev": randomName(),
                    "kepfile": randomKep(),
                    "ar": getRandomArbitrary(250, 5000)
                },
                {
                    "nev": randomName(),
                    "kepfile": randomKep(),
                    "ar": getRandomArbitrary(250, 5000)
                }
            ]
        }
    );
}

//Item
for (var i = 1; i <= 3; i++) {

    db.Item.insert(
        {
            "nev": randomName(),
            "ar": getRandomArbitrary(40, 4000),
            "schema_version": 1,
            "kepfile": randomKep(),
            "elerheto": random_boolean(),
            "tulajdonsagok": [
                {
                    "k": random_k(0, 2),
                    "v": getRandomArbitrary(10, 1000)
                },
                {
                    "k": random_k(3, 5),
                    "v": getRandomArbitrary(10, 1000)
                },
                {
                    "k": random_k(6, 8),
                    "v": getRandomArbitrary(10, 1000)
                },
                {
                    "k": random_k(9, 11),
                    "v": getRandomArbitrary(10, 1000)
                },
                {
                    "k": random_k(12, 14),
                    "v": getRandomArbitrary(10, 1000)
                },
            ]
        }
    );
}


//Jatekmod

for (var i = 1; i <= 1000000; i++) {

    db.Jatekmod.insert(
        {
            "nev": randomName(),
            "schema_version": 1,
            "engedelyezetthosok": [
                {
                    "nev": randomName()
                },
                {
                    "nev": randomName()
                },
                {
                    "nev": randomName()
                },
                {
                    "nev": randomName()
                },
                {
                    "nev": randomName()
                }
            ]
        }
    );
}


db.Jatekos.insert(
    {
        "nev": randomName(),
        "schema_version": 1,
        "kepfile": randomKep(),
        "valasztottkiralysag": [
            {
                "nev": getRandomNameKiralysag()
            },
            {
                "nev": getRandomNameKiralysag()
            },
            {
                "nev": getRandomNameKiralysag()
            }
        ]
    }
);


//Kiralysag
for (var i = 1; i <= 1000000; i++) {

    db.Kiralysag.insert(
        {
            "nev": randomName(),
            "schema_version": 1,
            "leiras": randomName,
            "kiraly_neve": randomName,
            "terulet": getRandomArbitrary(100, 10000),
            "it_jart_hosok": [
                {
                    "nev": randomName()
                },
                {
                    "nev": randomName()
                },
                {
                    "nev": randomName()
                },
                {
                    "nev": randomName()
                },
                {
                    "nev": randomName()
                },
                {
                    "nev": randomName()
                },
                {
                    "nev": randomName()
                },
                {
                    "nev": randomName()
                },
                {
                    "nev": randomName()
                },
                {
                    "nev": randomName()
                },
                {
                    "nev": randomName()
                },
            ]
        }
    );
}

//Targyeszlet
var insertTargy = function () {


    for (var i = 1; i <= 100000; i++) {
        try {
            db.Targykeszletek.insert(

                {

                    "schema_version": 1,
                    "hos": {
                        "nev": randomName()
                    },
                    "itemek": [
                        {
                            "itemId":
                                ObjectId(getRandomNameItemId()),
                        },
                        {
                            "itemId":
                                ObjectId(getRandomNameItemId()),
                        },
                        {
                            "itemId":
                                ObjectId(getRandomNameItemId()),
                        },
                        {
                            "itemId":
                                ObjectId(getRandomNameItemId()),
                        },
                        {
                            "itemId":
                                ObjectId(getRandomNameItemId()),
                        },
                        {
                            "itemId":
                                ObjectId(getRandomNameItemId()),
                        }
                    ]
                }


            );
        } catch (err) {
            insertTargy()
        }
    }

}


for (var i = 1; i <= 100000; i++) {
    db.jatekmod.insert(
        {
            nev: randomName(),
            schema_version: 1,
            engedelyezetthosok: [{
                nev: randomName()
            },
            {
                nev: randomName()
            }]
        }
    );
}

for (var i = 1; i <= 100000; i++) {
    db.jatekmod.insert(
        {
            nev: randomName(),
            schema_version: 2,
            engedelyezetthosok: [{
                nev: randomName()
            }],
            mapkep: randomKep()
        }
    );
}

for (var i = 1; i <= 500000; i++) {
    db.jatekmod.insert(
        {
            nev: randomName(),
            schema_version: 3,
            engedelyezetthosok: [{
                nev: randomName()
            }],
            szerezhetoxp: getRandomArbitrary(100, 500)
        }
    );
}

for (var i = 1; i <= 300000; i++) {
    db.jatekmod.insert(
        {
            nev: randomName(),
            schema_version: 4,
            engedelyezetthosok: [{
                nev: randomName()
            }],
            szerezhetoxp: getRandomArbitrary(100, 500),
            szerezhetojutalmak: [{
                jutalom: randomName()
            },
            {
                jutalom: randomName()
            }]
        }
    );
}