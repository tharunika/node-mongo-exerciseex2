var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("musicdetials");
  var musicdetials = [
    {song name: 'ThaniyeThananthaniye', fill: 'Rhythm',music Director:'A.R.Rahman',Singer:'Shankar mahadevan'},
  {song name: 'Evano Oruvan', fillm: 'Alai payuthey',music Director:'A.R.Rahman',Singer:'Swarnalatha'},
{song name: 'Roja Poonthottam', fillm: 'Kannukkul Nilavu',music Director:'llaiyaraaja',Singer:'Unnikrishan Anuradha Srriram'},
    {song name: 'Vennilavae VennilavaeVinnaithaandi', fill: 'Minsara Kanavu',music Director:'A.R.Rahman',Singer:'Hariharan Sadhana Sargam'},
  {song name: 'Sollamal Thottu Chellum Thendral', fill: 'Dheena',music Director:'Yuvan Shankar Raja',Singer:'Hariharan'},
{song name: 'ThaniyeThananthaniye', fill: 'Rhythm',music Director:'A.R.Rahman',Singer:'Shankar mahadevan'},

  ];
  dbo.collection("customers").insertMany(musicdetials, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
