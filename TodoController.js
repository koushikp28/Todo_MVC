var TodoController = function (model, view) {
	console.log("Todo Controller");
    this.model = model;
    this.view = view;
    this.init();
};

TodoController.prototype = {

	init: function () {
        this.setupHandlers()
            .enable();
    },

  setupHandlers: function () {
        return this;
    },

  enable: function () {
		this.view.deleteTodoEvent.attach(this.deleteTodo());
		this.view.updateTodoEvent.attach(this.updateTodo());
		this.view.addTodoEvent.attach(this.addTodo());
		this.view.selectTodoEvent.attach(this.selectall());
		  return this;
    },

  addTodo: function () {
		console.log("in add controller");
		var object = this;
		return function(sender, args) {
			object.model.addTodo(args.todo);			
		}
		},
		
	deleteTodo: function () {
		console.log("in del controller");
		var object = this;
		return function(sender, args) {
			object.model.deleteTodo();
		}
    },
		updateTodo: function () {
			console.log("in update controller");
			var object = this;
			return function(sender, args) {
				object.model.updateTodo(args.todo);
			}
			},		
	selectall: function () {
		console.log("in selectall controller");
		var object = this;
		return function(sender, args) {
			object.model.selectAll();
		}
    },
}