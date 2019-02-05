var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/student";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("student");
  dbo.collection("studentmarks").find({maths_marks:{$gt:50}}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
