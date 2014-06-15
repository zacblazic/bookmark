(function() {

'use strict';

var app = angular.module('bookmark', ["ngRoute"]);

app.controller("BookController", ["$route", "bookFactory", function($route, bookFactory) {
  self = this;
  self.book = {};

  bookFactory.getBook($route.current.params.id).
  success(function(data, status, headers, config) {
    self.book = data;
  }).
  error(function(data, status, headers, config) {
    console.error(status);
  });

}]);

app.controller("AddBookController", ["$location", "bookFactory", function($location, bookFactory) {
  self = this;
  self.book = {};

  self.addBook = function() {
    bookFactory.addBook(self.book)
    .success(function(data, status, headers, config) {
      $location.path("#/books");
    }).
    error(function(data, status, headers, config) {
      console.error(status);
    });
  }

}]);

app.controller("BookListController", ["bookFactory", function(bookFactory) {
  self = this;
  self.books = [];

  self.deleteBook = function(id) {
    bookFactory.deleteBook(id)
    .success(function(data, status, headers, config) {
      var bookIndex;
      self.books.forEach(function(value, index) {
        if (value._id == id) {
          bookIndex = index;
        }
      });
      self.books.splice(bookIndex, 1);
    }).
    error(function(data, status, headers, config) {
      console.error(status);
    });
  };

  bookFactory.getBooks()
  .success(function(data, status, headers, config) {
    self.books = data;
  }).
  error(function(data, status, headers, config) {
    console.error(status);
  });
}]);

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
      controller: "AddBookController",
      controllerAs: "AddBookCtrl"
    }).
    when("/book/:id/edit", {
      templateUrl: "partials/book/edit.html"
    }).
    otherwise({
      redirectTo: "/books"
    });
}]);

app.factory("bookFactory", ["$http", function($http){
  return {
    getBooks: function() {
      return $http.get("http://localhost:4222/api/books");
    },

    getBook: function(id) {
      return $http.get("http://localhost:4222/api/book/" + id);
    },

    addBook: function(book) {
      return $http.post("http://localhost:4222/api/books", book);
    },

    deleteBook: function(id) {
      return $http.delete("http://localhost:4222/api/book/" + id);
    }
  };
}]);

})();
