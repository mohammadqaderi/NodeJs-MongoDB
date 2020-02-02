var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db) {
    if (err) {
        throw err;
    }
    var dbo = db.db("mydb");

    var deleteKey = {name:"jhon doe"};
dbo.collection("persons").deleteOne(deleteKey,function(err,result) { 
    if (err) {
        throw err;
    }
    console.log(result.result.ok+ " deleted")

    db.close();
 
});
   
});
