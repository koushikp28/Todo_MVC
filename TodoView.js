var TodoView = function (model) {
	console.log("Todo View");

	this.model = model;
	this.deleteTodoEvent = new Event(this);
	this.updateTodoEvent = new Event(this);
	this.addTodoEvent = new Event(this);
	this.displayEvent = new Event(this);
	this.selectTodoEvent = new Event(this);
	document.getElementById("todolist").innerHTML=this.model.display();
	this.init();
	
}

TodoView.prototype = {
		
	init: function () {
        this.createChildren()
            .setupHandlers()
			.enable();
			
    },

    createChildren: function () {
		var deleteTodoButton = document.getElementById('deletetodo');
		var addTodoButton = document.getElementById('addtodo');
		var selectall = document.getElementById('deleting');
		var updateTodoButton = document.getElementById('updatetodo');

		return this;
    },
    setupHandlers: function () {
    	return this;
    },
    enable: function () {
		this.deleteTodoButton();
		this.addTodo();
		this.addTodoButton();
		this.cancelTodoButton();
		this.updateTodoButton();
		this.updateTodo();
		this.selectall();
		return this;
    },
	
    addTodoButton: function () {
		var object = this;
		document.getElementById("addtodo").onclick = function() {
		document.getElementById("top").style="display:none";
		document.getElementById("edit").style="display:block";
		document.getElementById("h2_add").style="display:block";
		document.getElementById("h2_update").style="display:none";
			return;
	}		
	},
    addTodo: function () {
		console.log("in add view");
		var object = this;
		document.getElementById("add").onclick = function() {
		document.getElementById("top").style="display:block";
		document.getElementById("edit").style="display:none";
		document.getElementById("add").style="display:inline";
		document.getElementById("update").style="display:none";

		var todo = {name:document.getElementById("todo_name").value,description:document.getElementById("todo_desc").value,priority:document.getElementById("todo_priority").value};
		object.addTodoEvent.notify({
			todo : todo
		});
		document.getElementById("todo_name").value="";
		document.getElementById("todo_desc").value="";
		document.getElementById("todo_priority").value="1";

		document.getElementById("todolist").innerHTML=object.model.display();
		//zthis.view.enable();
		return;
		
	}
	},
	cancelTodoButton : function() {
		var object = this;
		document.getElementById("cancel").onclick = function() {
		document.getElementById("top").style="display:block";
		document.getElementById("edit").style="display:none";
		
		document.getElementById("todolist").innerHTML=object.model.display();
		}
		return;
	},
	deleteTodoButton : function () {
		console.log("in del view");
		var object = this;
		document.getElementById("deletetodo").onclick = function() {
			var count=0;
			var del=document.getElementsByClassName('adding');
			for(var k=del.length-1;k>=0;k--){
				if(del[k].checked==true)
				{
					count=count+1;
				}
			}
			if(count>0){
				object.deleteTodoEvent.notify();
			}
			else{
				alert("Select atleast one");
			}
			
			document.getElementById("todolist").innerHTML=object.model.display();
		}		
		return;
	},
	updateTodoButton : function () {
		var object = this;
		document.getElementById("updatetodo").onclick = function() {

			var todos = object.model.getTodos();
			var count=0,i;
			var del=document.getElementsByClassName('adding');
			for(var k=del.length-1;k>=0;k--){
				if(del[k].checked==true){
					count=count+1;
					i=k;
				}
			}
			if(count==1){
				document.getElementById("top").style="display:none";
				document.getElementById("edit").style="display:block";
				document.getElementById("add").style="display:none";
				document.getElementById("update").style="display:inline";
				console.log(todos[i].name);
				document.getElementById("todo_name").value=todos[i].name;
				document.getElementById("todo_name").disabled=true;
				document.getElementById("todo_desc").value=todos[i].description;
				document.getElementById("todo_priority").value=todos[i].priority;
				document.getElementById("h2_add").style="display:none";
				document.getElementById("h2_update").style="display:block";

			}
			else if(count>1){
				alert("Selected multiple todos");
			}else{
				alert("Select atleast one todo");
			}	
		}		
	},
	updateTodo: function (todo) {
		var object = this;
		console.log("in update view")
		document.getElementById("update").onclick = function() {
		var todo = {name:document.getElementById("todo_name").value,description:document.getElementById("todo_desc").value,priority:document.getElementById("todo_priority").value};
		object.updateTodoEvent.notify({
			todo : todo
		});	
		document.getElementById("top").style="display:block";
		document.getElementById("edit").style="display:none";
		document.getElementById("todo_name").value="";
		document.getElementById("todo_desc").value="";
		document.getElementById("todo_priority").value="1";
		document.getElementById("add").style="display:inline";
		document.getElementById("update").style="display:none";
		

		document.getElementById("todo_name").disabled=false;

		document.getElementById("todolist").innerHTML=object.model.display();
	}
	},
	
	selectall: function() {
		var object = this;
		//var todos = object.model.getTodos();
		console.log("in selectall view");
		document.getElementById("deleting").onclick = function() {
			console.log("in selectall view");
			/*
			var k=document.getElementsByClassName("adding");
			var all=document.getElementById("deleting");
			console.log(document.getElementById("deleting").checked);
			if(all.checked==true){
				for(var i=0;i<todos.length;i++){
					k[i].checked=true;
					console.log("In a view loop");	
				}
			}	
			else if(all.checked==false){
				for(var i=0;i<todos.length;i++){
					k[i].checked=false;	
				}
			}
			*/	
			
			object.selectTodoEvent.notify({
			});
			console.log("in selectall view end");	
			return;		
			
		}
	}
}
	
