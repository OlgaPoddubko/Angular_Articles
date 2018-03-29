angular.module("editTodo").component("editTodo", {
  templateUrl: "app/edit-todo/edit-todo.template.html",
  controller: [
    "todoFactory",
    "$location",
    "$routeParams",
    function(todoFactory, $location, $routeParams) {
      this.todo = todoFactory.getTodos().find(todo => {
        return todo.id === +$routeParams.id;
      });

      this.editTodo = function(todoText, todoContent) {//
        todoFactory.editTodo({
          ...this.todo,
          text: todoText,
          content: todoContent//
        });
        $location.path("/");
      };
    }
  ]
});
