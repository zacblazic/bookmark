(function() {
  "use strict";

  var app = angular.module("app");

  app.factory("bookService", ["$http", "$q", "config", function($http, $q, config) {

    return {
      getBooks: getBooks,
      getBook: getBook,
      addBook: addBook,
      updateBook: updateBook,
      deleteBook: deleteBook
    };

    // Gets all books
    function getBooks() {
      var deferred = $q.defer();

      $http.get(config.endpoint + "/books").
        success(function(data, status) {
          deferred.resolve(data);
        }).
        error(function(data, status) {
          deferred.reject(status);
        });

      return deferred.promise;
    }

    // Gets a single book
    function getBook(id) {
      var deferred = $q.defer();

      $http.get(config.endpoint + "/book/" + id).
        success(function(data, status) {
          deferred.resolve(data);
        }).
        error(function(data, status) {
          deferred.reject(status);
        });

      return deferred.promise;
    }

    // Adds a new book
    function addBook(book) {
      var deferred = $q.defer();

      $http.post(config.endpoint + "/books", book).
        success(function(data, status) {
          deferred.resolve(data);
        }).
        error(function(data, status) {
          deferred.reject(status);
        });

      return deferred.promise;
    }

    // Updates an existing book
    function updateBook(id, book) {
      var deferred = $q.defer();

      $http.put(config.endpoint + "/book/" + id, book).
        success(function(data, status) {
          deferred.resolve(data);
        }).
        error(function(data, status) {
          deferred.reject(status);
        });

      return deferred.promise;
    }

    // Deletes a book
    function deleteBook(id) {
      var deferred = $q.defer();

      $http.delete(config.endpoint + "/book/" + id).
        success(function(data, status) {
          deferred.resolve(data);
        }).
        error(function(data, status) {
          deferred.reject(status);
        });

      return deferred.promise;
    }

  }]);

})();
