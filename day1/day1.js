var elem=document.getElementsByClassName("main");
elem.innerHTML="test";

function sample(){
	console.log("これはJavaScriptのサンプルです");
};

	var Cat = function(name){
	this.name = name;
	this.run = function(){
	console.log(this.name+"が走る");
	};
};
var tama = new Cat('タマ');
tama.run();
console.log(tama.name);