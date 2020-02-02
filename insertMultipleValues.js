var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db) {
    if (err) {
        throw err;
    }
    console.log('Connected');
    console.log('Database Created');
    var dbo = db.db("mydb");
    var info = [
        {name: "ahmad jazzaz", age: 22 , job:"tester",city:"amman", phone:962795149906},
        { name: "omar mansour ", age: 24 , job:"developer",city:"irbid", phone:962797861221},
        { name: "ali marzooq", age: 20 , job:"programmer",city:"amman", phone:9627798018},
        {name: "anas motee", age: 26 , job:"networker",city:"irbid", phone:962785189396},
        { name: "ahmad falaya", age: 29 , job:"quality-assurance",city:"zarqa", phone:962785189216},
        { name: "jehad abdullah", age: 30 , job:"manager",city:"jarash", phone:962785184106},
        { name: "sami jamal", age: 38 , job:"HR",city:"tafela", phone:962785187916},
        { name: "odai otoom", age: 35 , job:"HR",city:"ajloun", phone:962785776916},
        { name: "mustafa nasrallah", age: 36 , job:"manager",city:"mafraq", phone:962785637926},
        { name: "ziad shateh", age: 40 , job:"developer",city:"irbid", phone:962798789936},
        {name: "jomaa talal", age: 42 , job:"programmer",city:"salt", phone:9627913909906},
        {name: "majed faraj", age: 51 , job:"tester",city:"aqaba", phone:9627851899036},
        {name: "esam mojahed", age: 27 , job:"assistant",city:"maan", phone:9627951123906},
        { name: "mortada saif", age: 29 , job:"programmer",city:"karak", phone:962775429906}
      ];
   dbo.collection("persons").insertMany(info, function(err,result) {
       if (err) {
           throw err;
       }
       console.log('data inserted');
       db.close();
    
   });
   
    
});
