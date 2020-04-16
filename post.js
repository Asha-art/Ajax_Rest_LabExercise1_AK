
//let list = $('ul.userList');

$('#all').click(function(){
	$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(result){
		console.log(result);
		result.forEach(function(){
			var li = $('<li></li>');
    li.text(JSON.stringify(result));
    $('body').append(li);

		})
  })
}) 

//2
$('#post10').click(function(){
	$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',{id:10}, function(result){
		console.log(result);
	//list.empty();
		result.forEach(function(){
			var li = $('<li></li>');
    li.text(JSON.stringify(result));
    $('body').append(li);
   // li.text(x);
			//list.append(li);
		})
  })
}) 

//3
$('#comment12').click(function(){
	$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments',{id:12}, function(result){
		console.log(result);
	//list.empty();
		result.forEach(function(){
			var li = $('<li></li>');
    li.text(JSON.stringify(result));
    $('body').append(li);
  
		})
  })
}) 


//4
$('#post2').click(function(){
	$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',{id:2}, function(result){
		console.log(result);
			result.forEach(function(){
			var li = $('<li></li>');
    li.text(JSON.stringify(result));
    $('body').append(li);
  
		})
  })
}) 

//Create new Post
$('#newPost').click(function(){
  var newUserPost= "New Post";
	$.post('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', {title:newUserPost},function(result){

    console.log(result);

  })
}) 

//Replace the post

$('#replace12').click(function(){
	$.post('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',{id:12}, function(result){
		console.log(result);
			result.forEach(function(){
			var li = $('<li></li>');
    li.text(JSON.stringify(result));
    $('body').append(li);
  
		})
  })
}) 

//Update the title of post 

// Delete the post with id 12

// display a list of posts

// display all comments when user click on a post

//display a link back to all posts
