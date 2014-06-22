(function() {
  "use strict";

  var app = angular.module("app");

  app.controller("BookController", ["$routeParams", "$location", "bookService", function($routeParams, $location, bookService) {
    self = this;
    self.book = {};
    self.saveBook = saveBook;

    init();

    function init() {
      var id = $routeParams.id
      if (id) {
          bookService.getBook(id).
            then(function(book) {
              self.book = book;
          });
      }
    }

    function saveBook() {
      var id = $routeParams.id;

      if (!id) {
        addBook(self.book);
      } else {
        updateBook(id, self.book);
      }
    }

    // Adds a book
    function addBook(book) {
      bookService.addBook(book).
        then(function() {
          $location.path("#/books");
        });
    }

    // Updates a book
    function updateBook(id, book) {
      bookService.updateBook(id, book).
        then(function() {
          $location.path("#/books");
        });
    }

  }]);

  app.controller("BookListController", ["bookService", function(bookService) {
    self = this;
    self.books = [];
    self.deleteBook = deleteBook;

    init();

    function init() {
      bookService.getBooks().
        then(function(books) {
          self.books = books;
        });
    }

    // Deletes the book
    function deleteBook(id) {
      bookService.deleteBook(id).
        then(function(data) {
          removeBookFromList(id);
        });
    }

    // Removes a book from the listing
    function removeBookFromList(id) {
      var bookIndex;

      self.books.forEach(function(value, index) {
        if (value._id == id) {
          bookIndex = index;
        }
      });

      self.books.splice(bookIndex, 1);
    }

  }]);

})();
