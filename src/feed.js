'use strict'

function sortFeed(postList){
	let posts = postList.sort(function(a, b){return b.rating-a.rating});
	return posts;
}

function feed(){
	let postList = getPosts();
	return sortFeed(postList);
}



function getPosts(){
	var posts = [];
}