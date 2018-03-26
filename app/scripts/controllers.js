"use strict";

var routerApp = angular.module("routerApp");
routerApp.controller("CommentController", ["$scope", "commentFactory", function($scope, commentFactory) {
    //enter and submit user comments
    $scope.enter_comment = false;
    $scope.usercomments = commentFactory.getComments();
    $scope.comment_length = $scope.usercomments.length;
    $scope.input = {
      name: "",
      comment: "",
      date: new Date().toISOString()
    };
    $scope.submitComment = function() {
      if (!$scope.input.comment || !$scope.input.name) {
        $scope.enter_comment = true;
      } else {
        $scope.usercomments.push($scope.input);
        $scope.comment_length = $scope.usercomments.length;
        $scope.input = {
          name: "",
          comment: "",
          date: new Date().toISOString()
        };
        $scope.enter_comment = false;
      }
    };

    //remove individual comments
    $scope.remove = function(index) {
      $scope.usercomments.splice(index, 1);
      $scope.comment_length = $scope.usercomments.length;
    };
  }])
  .controller("TravelController", ["$scope", "photoFactory", "expenseFactory", function($scope, photoFactory, expenseFactory) {
    //create an itemized list
    $scope.expenses = expenseFactory.getExpenses();
    $scope.total_price = expenseFactory.getPrice();
    $scope.tab = 1;
    $scope.filtText = '';
    //create a function to calculate the total cost
    $scope.add = function() {
      if ($scope.total_price === 0) {
        for (var i = 0; i < $scope.expenses.length; i++) {
          $scope.total_price += $scope.expenses[i].price;
        }
        return $scope.total_price;
      }
    };

    //create a function to clear the input fields and total cost
    $scope.clear = function() {
      for (var i = 0; i < $scope.expenses.length; i++) {
        $scope.expenses[i].price = 0;
      }
      $scope.total_price = 0;
    };

    //item selection
    $scope.select = function(setTab) {
      $scope.tab = setTab;
      if (setTab === 2) {
        $scope.filtText = "transportation";
      } else if (setTab === 3) {
        $scope.filtText = "lodging";
      } else if (setTab === 4) {
        $scope.filtText = "tickets";
      } else if (setTab === 5) {
        $scope.filtText = "foods_drinks";
      } else if (setTab === 6) {
        $scope.filtText = "gifts";
      } else if (setTab === 7) {
        $scope.filtText = "misc";
      } else {
        $scope.filtText = "";
      }
    };
    $scope.isSelected = function(checkTab) {
      return ($scope.tab === checkTab);
    };

    //create a photo slideshow
    $scope.photos = photoFactory.getPhotos();
    var length = $scope.photos.length;
    var current_index = 0;
    $scope.photo = photoFactory.getPhoto(current_index);

    //next button
    $scope.next = function() {
      var next_index = current_index + 1;
      if (current_index < length - 1) {
        $scope.photo = photoFactory.getPhoto(next_index);
        current_index++;
      }
    };

    //previous button
    $scope.previous = function() {
      var previous_index = current_index - 1;
      if (current_index > 0) {
        $scope.photo = $scope.photo = photoFactory.getPhoto(previous_index);
        current_index--;
      }
    };
  }]);

routerApp.controller("VisitorController", ["$scope", "visitorFactory", function($scope, visitorFactory) {
  $scope.selection = visitorFactory.getSelection();

  $scope.selectedRegion = "";

  $scope.user = {
    email: "",
    name: "",
    age: 0,
    male: false,
    female: false,
    mail: false,
    text: false,
    chat: false
  };

  $scope.submitinfo = function() {

    $scope.selection = $scope.selectedRegion;

    $scope.user = {
      email: "",
      name: "",
      age: 0,
      male: false,
      female: false,
      mail: false,
      text: false,
      chat: false
    };

    $scope.selectedRegion = "";
    $scope.visitorForm.name.$setPristine();
    $scope.visitorForm.email.$setPristine();

  };
    
  //create a function to upload an image
  $scope.setFile = function(element) {
    $scope.currentFile = element.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
      $scope.image_source = event.target.result;
      $scope.$apply();
    };
    // when the file is read it triggers the onload event above.
    reader.readAsDataURL(element.files[0]);
  };
  //get regions and selected region for the visitor information
  $scope.regions = visitorFactory.getRegions();

}]);