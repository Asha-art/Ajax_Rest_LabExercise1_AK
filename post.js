
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
		result.forEach(function(){
			var li = $('<li></li>');
    li.text(JSON.stringify(result));
    $('body').append(li);
   
		})
  })
}) 

//3
$('#comment14').click(function(){
	$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments',{id:14}, function(result){
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
	$.post('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', {
		userID: 45,
		id: 18,
		title: "create new post",
		body: "Lorem ipsum"
	} , function(result){
		console.log(result);
			var li = $('<li></li>');
			li.text(JSON.stringify(result));
			$('body').append(li);
		})
})

//Replace the post

$('#replace14').click(function(){
	$.ajax({
		method: 'PUT',
		url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/14',
		data: { title: "post replaced"},
		 function(response){
			console.log(response.responseJSON);//handle response which usually includes the updated object.
		}
	},
	function(result){
		console.log(result);
			var li = $('<li></li>');
			li.text(JSON.stringify(result));
			$('body').append(li);
		})
  })


//Update the title of post 
$('#update14').click(function(){
	$.post('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/14',{
	id :14,	title: "post updated"},
		function(response){
			console.log(response.responseJSON);//Handle response, which usually contains the updated object including new ID's

		})
	},
	function(result){
		console.log(result);
			var li = $('<li></li>');
			li.text(JSON.stringify(result));
			$('body').append(li);
		})
  
// Delete the post with id 14 ...Remove the object
$('#update14').click(function(){
$.ajax({
	method: 'DELETE',
	url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/14',
	complete: function(response){
		console.log(response.responseJSON);
		}
	},function(result){
		console.log(result);
		var li = $('<li></li>');
		li.text(JSON.stringify(result));
		$('body').append(li);
	})
})


// display a list of posts
$('#displayAll').click(function(){
	$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(users){
		//Iterate over the response, adding elements to DOM
		users.forEach(function(){
			console.log(users);
			var li = $('<li></li>');
			li.text(JSON.stringify(users));
		$('body').append(li);
		})
	})
})

// display all comments when user click on a post
$('#commentPost').click(function(){
	

})
//display a link back to all posts
$('#linkPost').click(function(){
	
})