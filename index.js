var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url,function(err,db) {
    if (err) {
        throw err;
    }
    console.log('Connected');
    console.log('Database Created');
    var dbo = db.db("mydb");
   dbo.createCollection('persons',function (err,result) {
       if (err) {
           throw err;
       }
       console.log('Collection Created');
       db.close();
   });
   
    
});
