app.controller('booksCtrl', ['$scope', 'booksService',
  function($scope, booksService) {

    $scope.sortType = 'author'; 
    $scope.sortReverse  = false; 
    $scope.getBooks = function() {
      booksService.booklist()
        .success(function(data) {
          $scope.books = data;
          $scope.flag = true;
          $scope.status = "Books Successfully fetched. Click on 'Tab 2' to see the results.";
        })
        .error(function() {
          $scope.errflag = true;
          $scope.status = "Unable to load books.";
        });
    }
  }
]);
