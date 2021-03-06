var Firebase=require("firebase");
var entrance=function(username) {
	return new Firebase("https://cmphuiping.firebaseio.com/users/_default_/entrance");
}
var markups=function(key) {
	return new Firebase("https://cmphuiping.firebaseio.com/markups/"+key);
}
var jingwen=function(db,segid) {
	if (!db) {
		return new Firebase("https://cmphuiping.firebaseio.com/jingwen/");	
	} else if (!segid) {
		return new Firebase("https://cmphuiping.firebaseio.com/jingwen/"+db);
	}
	return new Firebase("https://cmphuiping.firebaseio.com/jingwen/"+db+"/"+segid);
}

var user=function() {
	return new Firebase("https://cmphuiping.firebaseio.com/");	
}
var rootpath=function(path){
	return new Firebase("https://cmphuiping.firebaseio.com/"+path);
}
module.exports={entrance:entrance,markups:markups,user:user,rootpath:rootpath,jingwen:jingwen};