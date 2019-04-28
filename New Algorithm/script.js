'use strict'





document.addEventListener('DOMContentLoaded', function () {
	let posts= feed()
	let sortedArray = sortFeed(posts);
	let index = 0;
	//var canvas = document.getElementById("myCanvas");
	//var ctx = canvas.getContext("2d");
/*
	let padding=10;
	for(let i=0;i<sortedArray.length;i=i+1){
		//var Mycanvas = document.getElementById("myCanvas");
		var canvas=document.createElement("CANVAS");
		canvas.id="post"+i;
		let iterX=20;
		let iterY=30;
		//canvas.className  = "myClass";
		//canvas.id = "myId";
		//canvas.width=100;
		//canvas.height=100;
		var ctx = canvas.getContext("2d");
		ctx.rect(iterX-5, iterY-10, 100, 55);
		ctx.stroke();
		ctx.font = "10px Arial";
		ctx.fillText("Title: "+sortedArray[i].name, iterX, iterY);
		iterY=iterY+10;
		ctx.fillText("Content: "+sortedArray[i].contents, iterX, iterY);
		iterY=iterY+10;
		ctx.fillText("Rating: "+sortedArray[i].rating, iterX, iterY);
		iterY=iterY+10;
		ctx.fillText("Author: "+sortedArray[i].author, iterX, iterY);
		iterY=iterY+10;
		ctx.fillText("Tag: "+sortedArray[i].tag, iterX, iterY);
		iterY=iterY+10+padding;
		//document.getElementsByTagName('body')[0].appendChild(canvas);
		document.body.appendChild(canvas)*/
	for(let i=0;i<2;i=i+1){
		alert(JSON.stringify(sortedArray[i]));
		document.getElementById("name" + (i+1)).innerHTML = sortedArray[i].name + '<br />';
		document.getElementById("content" + (i+1)).innerHTML = sortedArray[i].contents + '<br />';
		document.getElementById("rating" + (i+1)).innerHTML = sortedArray[i].rating;
		document.getElementById("upvote" + (i+1)).onclick = function() { sortedArray[i].rating++; document.getElementById("rating" + (i+1)).innerHTML++; }
		document.getElementById("downvote" + (i+1)).onclick = function() { sortedArray[i].rating--; document.getElementById("rating" + (i+1)).innerHTML--; }
		index++;
	}
	
}
);

function sortFeed(postList){
	let posts = postList.sort(function(a, b){return b.rating-a.rating});
	return posts;
}


function feed(){
	let postList = getPosts();
	return sortFeed(postList);
}



function getPosts(){
	return [{"name":"ay","contents":"aylmao","rating":3,"author":"author???","tag":"meh",},{"name":"ay2","contents":"aylmao2","rating":123,"author":"author???2","tag":"meh2",}]
}



