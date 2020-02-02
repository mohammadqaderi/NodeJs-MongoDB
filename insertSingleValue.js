var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db) {
    if (err) {
        throw err;
    }
    console.log('Connected');
    console.log('Database Created');
    var dbo = db.db("mydb");
    var info = { name: "mohammad qaderi", age: 23 , job:"programmer",city:"amman",
    phone:962785189906};
   dbo.collection("persons").insertOne(info, function(err,result) {
       if (err) {
           throw err;
       }
       console.log('data inserted');
       db.close();
    
   });
   
    
});
