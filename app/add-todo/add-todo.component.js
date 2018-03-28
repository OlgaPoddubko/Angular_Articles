angular.module("addTodo").component("addTodo", {
  templateUrl: "app/add-todo/add-todo.template.html",
  controller: [
    "todoFactory",
    "$location",
    function(todoFactory, $location) {
      this.addTodo = function(todoText) {
        todoFactory.addTodo(todoText);
        $location.path("/");
      };
    }
  ]
});
