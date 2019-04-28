'use strict'
	//on startup
	var tagAmount=6; //hardcoded amount of tags
document.addEventListener('DOMContentLoaded', function () {

	//uses pageType to select which version of script to run
	//todo split into seperate script files
	var pageType = document.getElementById('type');	

	//for postpAGE
	//runs the createPost
	//todo get createpost to update posts in server memory
	if(pageType==null){
	document.getElementById("submitNewPost").addEventListener("click", function(){
	let newPost=createPost();
	console.log(newPost);
	pushPost(newPost);
	}
	);
	}
	
	//values for upvote and downvote logic
	let up1=true; 
	let down1=true;
	let up2=true;
	let down2=true;
	
	//initializes generated posts and sorted array for future sorting
	let sortedArray;
	let posts=getPosts();
	
	
	//if the pageType exists
	// only trending and newst have a type element
	//todo: add type to all pages
	if(pageType !== null)
	{
		let index = 0;
		
		//runs two different sorting algorithms for the two pages
		if(pageType.className === 'trending')
		{
			sortedArray = sortFeedRate(posts);
		}
		else if(pageType.className === 'newest')
		{
			sortedArray = sortFeedTime(posts);
		}
		
		//if the array has been sorted run for loop to present the first two posts
		//two slots for posts have been initialized in html, this updates those
		if(sortedArray !== undefined){
			for(let i=0;i<2;i=i+1){
				
				//changging inner html
				document.getElementById("name" + (i+1)).innerHTML = sortedArray[i].name + '<br />';
				document.getElementById("content" + (i+1)).innerHTML = sortedArray[i].contents + '<br />';
				document.getElementById("rating" + (i+1)).innerHTML = sortedArray[i].rating;
				document.getElementById("date" + (i+1)).innerHTML = sortedArray[i].time.toLocaleString();
				index++;
			}
			
			//event listeners for upvote and downvote
			document.getElementById("upvote1").addEventListener("click", function(){if(up1&&down1){
			//todo replace document parsing for variable with array parsing for rating value
			let variable=(parseInt((document.getElementById("rating1")).innerHTML)+1).toString();//finds and calculates new value (first click) stores as string
			  document.getElementById("rating1").innerHTML =variable;//updates inner html
			  sortedArray[index - 2].rating++; //updates rating value stored in array 
			  
			  
			}
			
			//if the downvote has been clicked, simulate unclicking downvote and clicking the upvote
			//increment upwards twice
			else if(up1&&!down1){
			  let variable=(parseInt((document.getElementById("rating1")).innerHTML)+2).toString();
			  document.getElementById("rating1").innerHTML =variable;
			  sortedArray[index - 2].rating += 2;
			  down1=true;
			}
			  up1=false;
			}
			);
			
			//event listeners for upvote and downvote
			document.getElementById("upvote2").addEventListener("click", function(){if(up2&&down2){
				let variable=(parseInt((document.getElementById("rating2")).innerHTML)+1).toString();
			  document.getElementById("rating2").innerHTML =variable;
			  sortedArray[index - 1].rating++;
			}
			  else if(up2&&!down2){
			  let variable=(parseInt((document.getElementById("rating2")).innerHTML)+2).toString();
			  document.getElementById("rating2").innerHTML =variable;
			  sortedArray[index - 1].rating += 2;
			  down2=true;
			}
			  up2=false;
			}

			);
			
			
			//event listeners for upvote and downvote
			document.getElementById("downvote1").addEventListener("click", function(){if(down1&&up1){
				let variable=(parseInt((document.getElementById("rating1")).innerHTML)-1).toString();
			  document.getElementById("rating1").innerHTML =variable;
			  sortedArray[index - 2].rating--;
			  up1=true;
			}
			  else if(down1&&!up1){
			  let variable=(parseInt((document.getElementById("rating1")).innerHTML)-2).toString();
			  document.getElementById("rating1").innerHTML =variable;
			  sortedArray[index - 2].rating -= 2;
			  up1=true;
			}
			down1=false;
			}
			);
			
			
			//event listeners for upvote and downvote
			document.getElementById("downvote2").addEventListener("click", function(){if(down2&&up2){
				let variable=(parseInt((document.getElementById("rating2")).innerHTML)-1).toString();
			  document.getElementById("rating2").innerHTML =variable;
			  sortedArray[index - 1].rating--;
			  
			}

			  else if(down2&&!up2){
			  let variable=(parseInt((document.getElementById("rating2")).innerHTML)-2).toString();
			  document.getElementById("rating2").innerHTML =variable;
			  sortedArray[index - 1].rating -= 2;
			  up2=true;
			}
			  down2=false;
			}
			);
			
		}
	}
}
);

//rating sorting algorithm
function sortFeedRate(postList){
	let posts = postList.sort(function(a, b){return b.rating-a.rating});
	return posts;
}
//time sorting algorithm
function sortFeedTime(postList){
	let posts = postList.sort(function(a, b){return b.time.getTime()-a.time.getTime()});
	return posts;
}


//creates the post based on information in the form
//todo get username and time of post from server
function createPost(){
	let name=document.getElementById("titleText").value;
	let contents=document.getElementById("contentText").value;
	return {"name":name,"contents":contents,"rating":0,"author":getUsername(),"tag":getTags(),"time":getServerTime()};
}

//todo actual server functionality
function getServerTime(){
	return "time";
}

//membership functionality
function getUsername(){
	return "User";
}

//gets tags from form as array
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




//gets the autogenerated posts
//todo get posts from server
function getPosts(){
	return [{"name":"Educational Resources","contents":"Five professors of San Jose State University have proposed a new tutoring program for low-income and homeless students.","rating":3,"author":"author???","tag":"meh","time": new Date('Sat Apr 27 2019 7:51:16 GMT-0700 (Pacific Daylight Time)'),},
	{"name":"New Options for Food","contents":"Two new food banks have opened up near San Jose State University;  one in 7th Street an one in San Fernando Street.","rating":123,"author":"author???2","tag":"meh2","time":new Date('Sat Apr 27 2019 11:51:16 GMT-0700 (Pacific Daylight Time)'),},
	{"name":"Open Clinic","contents":"Clinic offers free healthcare to homeless in San Jose area","rating":700,"author":"author???2","tag":"meh2","time":new Date('Fri Apr 26 2019 11:51:16 GMT-0700 (Pacific Daylight Time)'),
	}]
}

//displays posts
//todo push posts to server
function pushPost(post){
	alert(JSON.stringify(post));
}


