'use strict'
var tagAmount=6;
document.addEventListener('DOMContentLoaded', function () {
	document.getElementById("submitNewPost").addEventListener("click", function(){
	let newPost=createPost();
	console.log(newPost);
	pushPost(newPost);
	}
	);
	
	let up1=true;
	let down1=true;
	let up2=true;
	let down2=true;
	let posts= getPosts();
	let sortedArray;
	var pageType = document.getElementById('type');
	if(pageType.className === 'trending')
	{
		//alert(JSON.stringify(posts));
		sortedArray = sortFeedRate(posts);
		//alert(JSON.stringify(sortedArray));
	}
	else if(pageType.className === 'newest')
	{
		//alert(pageType.className);
		sortedArray = sortFeedTime(posts);
	}
	if(sortedArray != undefined)
	{
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
			//alert(JSON.stringify(sortedArray[i]));
			document.getElementById("name" + (i+1)).innerHTML = sortedArray[i].name + '<br />';
			document.getElementById("content" + (i+1)).innerHTML = sortedArray[i].contents + '<br />';
			document.getElementById("rating" + (i+1)).innerHTML = sortedArray[i].rating;
			index++;
		}
		document.getElementById("upvote1").addEventListener("click", function(){if(up1&&down1){
			let variable=(parseInt((document.getElementById("rating1")).innerHTML)+1).toString();
		  document.getElementById("rating1").innerHTML =variable;
		  sortedArray[index - 2]++;
		}
		else if(up1&&!down1){
		  let variable=(parseInt((document.getElementById("rating1")).innerHTML)+2).toString();
		  document.getElementById("rating1").innerHTML =variable;
		  sortedArray[index - 2] += 2;
		  down1=true;
		}
		  up1=false;
		}
		);
		document.getElementById("upvote2").addEventListener("click", function(){if(up2&&down2){
			let variable=(parseInt((document.getElementById("rating2")).innerHTML)+1).toString();
		  document.getElementById("rating2").innerHTML =variable;
		  sortedArray[index - 1]++;
		}
		  else if(up2&&!down2){
		  let variable=(parseInt((document.getElementById("rating2")).innerHTML)+2).toString();
		  document.getElementById("rating2").innerHTML =variable;
		  sortedArray[index - 1] += 2;
		  down2=true;
		}
		  up2=false;
		}

		);
		document.getElementById("downvote1").addEventListener("click", function(){if(down1&&up1){
			let variable=(parseInt((document.getElementById("rating1")).innerHTML)-1).toString();
		  document.getElementById("rating1").innerHTML =variable;
		  sortedArray[index - 2]--;
		  up1=true;
		}
		  else if(down1&&!up1){
		  let variable=(parseInt((document.getElementById("rating1")).innerHTML)-2).toString();
		  document.getElementById("rating1").innerHTML =variable;
		  sortedArray[index - 2] -= 2;
		  up1=true;
		}
		down1=false;
		}
		);
		document.getElementById("downvote2").addEventListener("click", function(){if(down2&&up2){
			let variable=(parseInt((document.getElementById("rating2")).innerHTML)-1).toString();
		  document.getElementById("rating2").innerHTML =variable;
		  sortedArray[index - 1]--;

		}

		  else if(down2&&!up2){
		  let variable=(parseInt((document.getElementById("rating2")).innerHTML)-2).toString();
		  document.getElementById("rating2").innerHTML =variable;
		  sortedArray[index - 1] -= 2;
		  up2=true;
		}
		  down2=false;
		}
		);
	}
}
);

function sortFeedRate(postList){
	let posts = postList.sort(function(a, b){return b.rating-a.rating});
	return posts;
}

function sortFeedTime(postList){
	let posts = postList.sort(function(a, b){return b.time-a.time});
	return posts;
}



function createPost(){
	let name=document.getElementById("titleText").value;
	let contents=document.getElementById("contentText").value;
	console.log({"name":name,"contents":contents,"rating":0,"author":getUsername(),"tag":getTags(),"time":getServerTime()});
}

function getServerTime(){
	return "time";
}
function getUsername(){
	return "User";
}
function getTags(){
	let array=[];
	for(let i=0;i<tagAmount;i++){
		var button=document.getElementById("tag"+i);

		if(button.checked===true){
			array.push(button.name);
			console.log(button.name);
	}
}
return array;
}
function getPosts(){
	return [{"name":"Educational Resources","contents":"Five professors of San Jose State University have proposed a new tutoring program for low-income and homeless students.","rating":3,"author":"author???","tag":"meh","time": new Date('Sun Apr 26 2019 11:51:16 GMT-0700 (Pacific Daylight Time)'),},
	{"name":"New Options for Food","contents":"Two new food banks have opened up near San Jose State University;  one in 7th Street an one in San Fernando Street.","rating":123,"author":"author???2","tag":"meh2","time":new Date('Sun Apr 26 2019 11:51:16 GMT-0700 (Pacific Daylight Time)'),},
	{"name":"Open Clinic","contents":"Clinic offers free healthcare to homeless in San Jose area","rating":700,"author":"author???2","tag":"meh2","time":2400,
	}]
}

function pushPost(post){
	
}


