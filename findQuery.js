var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db) {
    if (err) {
        throw err;
    }
    var dbo = db.db("mydb");
    var query1 = { name: "mohammad qaderi" };
    var query2 = { name: /^a/ };
dbo.collection("persons").find(query2).toArray(function(err,result) {
    if (err) {
        throw err;
    }
    console.log(result)

    db.close();
 
});
   
});
