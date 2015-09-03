app.factory('booksService', function($http){
  
  var booksService = {};
  
  booksService.booklist = function () {
      return $http.get('books.json');
    };
  
  return booksService;
});
