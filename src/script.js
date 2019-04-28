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



