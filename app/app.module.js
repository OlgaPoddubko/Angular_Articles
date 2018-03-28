import angular from "angular";
import ngRoute from "angular-route";
import ngResource from "angular-resource";

require("./show-todo/show-todo.module");
require("./add-todo/add-todo.module");
require("./edit-todo/edit-todo.module");
require("./todo-form/todo-form.module");

import todoFactory from "./todo-helpers/todos-factory";
import todoDays from "./todo-helpers/todo-days";

angular
  .module("app", [
    "showTodo",
    "addTodo",
    "editTodo",
    "todoForm",
    ngRoute,
    ngResource
  ])
  .factory("todoFactory", ["$resource", todoFactory])
  .filter("todoDays", todoDays)
  .config([
    "$locationProvider",
    "$routeProvider",
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix("!");

      $routeProvider
        .when("/", {
          template: "<show-todo></show-todo>"
        })
        .when("/add", {
          template: "<add-todo></add-todo>"
        })
        .when("/edit/:id", {
          template: "<edit-todo></edit-todo>"
        })
        .otherwise("/");
    }
  ]);
