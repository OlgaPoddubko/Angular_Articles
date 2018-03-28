angular.module('showTodo').component('showTodo', {
  templateUrl: 'app/show-todo/show-todo.template.html',
  controller: [
    '$scope',
    'todoFactory',
    ($scope, todoFactory) => {

      $scope.todos = todoFactory.getTodos();

      $scope.removeTodo = todo => {
        todoFactory.removeTodo(todo);
      };

      $scope.editTodo = todo => {
        todoFactory.editTodo(todo);
      };

      $scope.toggleDone = (todo) => {
        todoFactory.toggleDone(todo);
      };

      $scope.sortParam = 'created | todoDays';
      $scope.sortBy = (sortParam) => {
        $scope.sortParam = sortParam;
      };

      /*pagination*/
      $scope.startingTodo = 0;
      $scope.endingTodo = 4;
      $scope.currentPage = 0;
      let itemsPerPage = 4;

      $scope.numberOfPages = () => {
        return Math.ceil($scope.todos.length / itemsPerPage);
      };

      $scope.showPrevPage = function() {
        $scope.currentPage = $scope.currentPage - 1;
        $scope.startingTodo = $scope.startingTodo - itemsPerPage;
        $scope.endingTodo = $scope.endingTodo - itemsPerPage;
      };
      $scope.showNextPage = function() {
        $scope.currentPage = $scope.currentPage + 1;
        $scope.startingTodo = $scope.startingTodo + itemsPerPage;
        $scope.endingTodo = $scope.endingTodo + itemsPerPage;
      }
    }
  ]
});
