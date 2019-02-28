var TodoModel = function () {
	console.log("Todo Model");
         
	 this.todos = [{name:'a',description:'abc',priority:'1'},{name:'b',description:'abc',priority:'2'},{name:'c',description:'abc',priority:'3'}];
	 this.addTodoEvent = new Event(this);
	 this.updateTodoEvent = new Event(this);
	 this.selectTodoEvent = new Event(this);

	 //this.todoNameMap = {};
	 //this.selectall = new Event(this);

	 
 };

 TodoModel.prototype = {
	getTodos : function(){
		return this.todos;
	},
     addTodo: function (todo) {
		 console.log("in add model");
		 var flag=0;
		 for(var i=0;i<this.todos.length;i++){
			 if(todo.name==""||todo.description==""||todo.priority=="")
			 {
				alert("Please enter all the fields");
				return;
			 }
			 if(todo.name==this.todos[i].name){
				 flag=1;
			 }
		 }
		 if(flag==0){
		 this.todos.push(todo);
		}
		else{
			alert(todo.name+ " already exists");
		}
		 console.log(this.todos);
		// this.display();
	 },
	 display : function(){
		console.log("in display model");
		var object = this;
		var text = "<table><tr><th><input type='checkbox' id='deleting'/></th><th>Todo Name</th><th>Description</th><th>Priority</th></tr></table>"
		for (var i=0;i<this.todos.length;i++){
			text+="<tr><td><input type='checkbox' class='adding'/></td><td>"+this.todos[i].name+"</td><td>"+this.todos[i].description+"</td><td>"+this.todos[i].priority+"</td></tr>"
		}
		text+="</table>";
		return text;
		
	},
	deleteTodo : function() {
		console.log("in del model");
		var object = this;
		var del=document.getElementsByClassName('adding');
		var delall=document.getElementById('deleting');
		//console.log(del.length);
		if(delall.checked==true)
		{
			this.todos.splice(0,del.length);
		}
		else{
			for(var k=del.length-1;k>=0;k--){
				if(del[k].checked==true)
				{
				this.todos.splice(k,1);
				}
			  }  
		}
		
	},
	
	updateTodo: function (todo) {
		console.log("in update model");
		var upd=document.getElementsByClassName('adding');
		for(var k=0;k<upd.length-1;k++){
			if(upd[k].checked==true)
			{
				this.todos[k]=todo;
				console.log(this.todos);
				return;
			}
		}		
	},
	
	selectAll : function() {
		var object = this;
		console.log("in selectall model");
		var k=document.getElementsByClassName("adding");
		var all=document.getElementById("deleting");
		console.log(document.getElementById("deleting").checked);
		var l=k.length;
		if(all.checked==true){
			for(var i=0;i<l;i++){
				k[i].checked=true;
				console.log("In a model loop");	
			}
		}	
		else if(all.checked==false){
			for(var i=0;i<l;i++){
				k[i].checked=false;	
			}
		}
		//this.display();
		}

 }
