'use strict'

document.addEventListener('DOMContentLoaded', function () {
	let down1=true;
	let up1=true;
	let up2=true;
	let down2=true;
document.getElementById("upvote1").addEventListener("click", function(){if(up1&&down1){
	let variable=(parseInt((document.getElementById("value1")).innerHTML)+1).toString();
  document.getElementById("value1").innerHTML =variable;
}
else if(up1&&!down1){
  let variable=(parseInt((document.getElementById("value1")).innerHTML)+2).toString();
  document.getElementById("value1").innerHTML =variable;
  down1=true;
}
  up1=false;
}
);
document.getElementById("upvote2").addEventListener("click", function(){if(up2&&down2){
	let variable=(parseInt((document.getElementById("value2")).innerHTML)+1).toString();
  document.getElementById("value2").innerHTML =variable;
}
  else if(up2&&!down2){
  let variable=(parseInt((document.getElementById("value2")).innerHTML)+2).toString();
  document.getElementById("value2").innerHTML =variable;
  down2=true;
}
  up2=false;
}

);
document.getElementById("downvote1").addEventListener("click", function(){if(down1&&up1){
	let variable=(parseInt((document.getElementById("value1")).innerHTML)-1).toString();
  document.getElementById("value1").innerHTML =variable;
  up1=true;
}
  else if(down1&&!up1){
  let variable=(parseInt((document.getElementById("value1")).innerHTML)-2).toString();
  document.getElementById("value1").innerHTML =variable;
  up1=true;
}
down1=false;
}
);
document.getElementById("downvote2").addEventListener("click", function(){if(down2&&up2){
	let variable=(parseInt((document.getElementById("value2")).innerHTML)-1).toString();
  document.getElementById("value2").innerHTML =variable;

}

  else if(down2&&!up2){
  let variable=(parseInt((document.getElementById("value2")).innerHTML)-2).toString();
  document.getElementById("value2").innerHTML =variable;
  up2=true;
}
  down2=false;
}
);



}
);
/*
document.addEventListener('DOMContentLoaded', function () {
	let posts= feed()
	let sortedArray = sortFeed(posts);
	//var canvas = document.getElementById("myCanvas");
	//var ctx = canvas.getContext("2d");

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
		document.body.appendChild(canvas)
				
	}
	
}
);
*/
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



