




















document.addEventListener('DOMContentLoaded', function () {
	let sortedArray= [{"name":"ay","contents":"aylmao","rating":12,"author":"author???","tag":"meh",},{"name":"ay2","contents":"aylmao2","rating":3,"author":"author???2","tag":"meh2",}]
//drawFeed(sortedArray){
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	let iterX=0;
	let iterY=30;
	for(let i=0;i<sortedArray.length;i=i+1){
		ctx.font = "10px Arial";
		ctx.fillText(sortedArray[i].name, iterX, iterY);
		iterY=iterY+10;
		ctx.fillText(sortedArray[i].contents, iterX, iterY);
		iterY=iterY+10;
		ctx.fillText(sortedArray[i].rating, iterX, iterY);
		iterY=iterY+10;
		ctx.fillText(sortedArray[i].author, iterX, iterY);
		iterY=iterY+10;
		ctx.fillText(sortedArray[i].tag, iterX, iterY);
		iterY=iterY+10;
	}
	
}
);