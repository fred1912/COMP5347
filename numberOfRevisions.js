var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/revisions';    

var index = 0;
var index2 = 0;

var max =0;
var min = 10000000;

var answer = new Array(0,100000000,0,100000000);


var cal = function(db,callback){
	
		db.listCollections().forEach(function(result) {  
			callback(result.name.toString());
		});	
}

var couD= function(db,name){
	var len = db.collection("Australia.json").distinct("user").length;
//	var len = collection.length;
	console.log(len);
}

var cou = function(db,name,callback){

	var collection = db.collection(name);
	//var len = collection.length;
	collection.count({},function(err,result){
		if (result>answer[0]) answer[0] = result;
		if (result<answer[1]) answer[1] = result;
		callback(++index);
	});	
}

exports.number = function(callback){
	MongoClient.connect(DB_CONN_STR, function(err, db) {
		cal(db,function(result) {
				if (result[result.length-1]=="n"){
					cou(db,result,function(index){
						if (index==99) {
						    //return 3;
							console.log(answer[0]);
							db.close();
							callback(answer);
						}
					});
				}
		});
	});
}

	MongoClient.connect(DB_CONN_STR, function(err, db) {
		couD(db,"x");
	});














