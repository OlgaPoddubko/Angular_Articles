angular.module("todoForm").component("todoForm", {
  templateUrl: "app/todo-form/todo-form.template.html",
  bindings: {
    todoAction: "&",
    todoText: "=",
    todoContent: "="
  },
  controller: [
    "$scope",
    function($scope) {
      this.onSubmit = () => {
        if ($scope.todoForm.$valid) {
          this.todoAction({ todoText: this.todoText, todoContent: this.todoContent });//
        }
      };
    }
  ]
});
