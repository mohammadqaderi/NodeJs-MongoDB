var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db) {
    if (err) {
        throw err;
    }
    var dbo = db.db("mydb");
    var mysort1 = { name: -1 };//Descending sort
    var mysort2 = { name: 1 };//Ascending sort
dbo.collection("persons").find().sort(mysort).toArray(function(err,result) { 
    if (err) {
        throw err;
    }
    console.log(result)

    db.close();
 
});
   
});
