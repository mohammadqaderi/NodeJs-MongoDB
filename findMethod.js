var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db) {
    if (err) {
        throw err;
    }
    var dbo = db.db("mydb");
//    dbo.collection("persons").findOne({}, function(err,result) {
//        if (err) {
//            throw err;
//        }
//        console.log('name:'+result.name);// this will show to as the first object name
//        db.close();
    
//    });
// dbo.collection("persons").find({}).toArray(function(err,result) {
//     if (err) {
//         throw err;
//     }
//     console.log(result);// this will show to as the first object name
//     db.close();
 
// });
dbo.collection("persons").find({}, { projection: [{}]}).toArray(function(err,result) {
    if (err) {
        throw err;
    }
    console.log(result)

    // this will show to as the first object name
    db.close();
 
});
   
});
