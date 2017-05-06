var connection = require('../config/connection.js');


var orm = {
	
	all:function(tableName,cb){
		
		var queryString = "SELECT * FROM " + tableName + ";";
		connection.query(queryString,function(err, res){
			if(err) throw err;
			cb(res);
		});
	},


	create:function(tableName,vals,cb){
		var queryString = "INSERT INTO " + tableName + "(something, something) VALUES(?,?)";

		connection.query(queryString,[vals,false],function(err,res){
			if(err) throw err;
			cb(res);
		});
	},
	
	update: function(tableName,id,cb){
		var queryString ="UPDATE " + tableName;
		queryString = queryString + " SET ";
		queryString = queryString + " something = true";
		queryString =queryString + " Where id = "+ id;

		connection.query(queryString,function(err, res){
			if(err) throw err;
			cb(res);
		});
	}
};

module.exports = orm; 