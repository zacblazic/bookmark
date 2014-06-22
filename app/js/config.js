(function() {
  "use strict";

  var app = angular.module("app");

  app.factory("config", function() {
    return {
      endpoint: "http://localhost:4222/api"
    };
  });

  // Add routes
  app.config(["$routeProvider", function($routeProvider) {
    $routeProvider.
      when("/books", {
        templateUrl: "partials/books.html",
        controller: "BookListController",
        controllerAs: "BookListCtrl"
      }).
      when("/book/:id/view", {
        templateUrl: "partials/book/view.html",
        controller: "BookController",
        controllerAs: "BookCtrl"
      }).
      when("/books/add", {
        templateUrl: "partials/book/add.html",
        controller: "BookController",
        controllerAs: "BookCtrl"
      }).
      when("/book/:id/edit", {
        templateUrl: "partials/book/add.html",
        controller: "BookController",
        controllerAs: "BookCtrl"
      }).
      otherwise({
        redirectTo: "/books"
      });
  }]);

})();
