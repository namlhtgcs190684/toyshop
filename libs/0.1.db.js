
/// npm install mongodb --save
const MongoClient = require('mongodb').MongoClient;

const dbname = 'toyshop';
const uri = 'mongodb+srv://namlh:namhcm2001@toyshop.alpmw.mongodb.net/toyshop?retryWrites=true&w=majority';

/// CÂU TRUY VẤN Ở ĐÂY !!!
// - { <field1>: <value>, <field2>: <value> ... }
// - operator:  
// 		 $in , $nin : { _id: { $in: [ 5, ObjectId("507c35dd8fada716c89d0013") ] }
// 		 $gt , $gte , $lt , $lte , $ne , $exists
// 		$regex : { "name.last": { $regex: /^N/ } }
// LINK:  https://docs.mongodb.com/manual/reference/operator/query/
function check(dbname){
  MongoClient.connect(uri, { useUnifiedTopology: true },
    function(err, dbconnection) {
     if (err) throw err;
     var dbo = dbconnection.db( dbname );
     
     dbo.collection("Create-User").find( querysql  ).toArray(
     function(err, result) {
       if (err) throw err;
       console.log(result);
       dbconnection.close();
     });
   });
}
