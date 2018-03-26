'use strict';
var routerApp = angular.module('routerApp');
routerApp.controller('HomeController', ['$scope', 'photoFactory', function($scope, photoFactory) {
    $scope.photo = photoFactory.getPhoto(1);
}])
.controller('FooterController', ['$scope', 'photoFactory', function($scope, photoFactory) {
    $scope.photo = photoFactory.getPhoto(10);
}])
.controller('IntroductionController', ['$scope', 'photoFactory', function($scope, photoFactory) {
    $scope.photo = photoFactory.getPhoto(3);
}])
.controller('TransportationController', ['$scope', 'photoFactory', function($scope, photoFactory) {
    $scope.photo = photoFactory.getPhoto(8);
}])
.controller('NeighborhoodsController', ['$scope', 'photoFactory', function($scope, photoFactory) {
    $scope.photo = photoFactory.getPhoto(6);
}])
.controller('AttractionsController', ['$scope', 'photoFactory', function($scope, photoFactory) {
    $scope.photo = photoFactory.getPhoto(5);
}])
.controller('ParksController', ['$scope', 'photoFactory', function($scope, photoFactory) {
    $scope.photo = photoFactory.getPhoto(2);
}])
.controller('RetailController', ['$scope', 'photoFactory', function($scope, photoFactory) {
    $scope.photo = photoFactory.getPhoto(4);
}])
.controller('MuseumsController', ['$scope', 'photoFactory', function($scope, photoFactory) {
    $scope.photo = photoFactory.getPhoto(0);
}])
.controller('TechController', ['$scope', 'photoFactory', function($scope, photoFactory) {
    $scope.photo = photoFactory.getPhoto(7);
}])
.controller('QueenAnneController', ['$scope', 'queenanneFactory', function($scope, queenanneFactory) {
    $scope.nextButton = false
    $scope.previousButton = true;
    $scope.photo = queenanneFactory.getPhoto(0);
    //create a photo slideshow
    $scope.photos = queenanneFactory.getPhotos();
    var length = $scope.photos.length;
    var current_index = 1;
    $scope.image_number = length - 1;
    $scope.current_photo = queenanneFactory.getPhoto(current_index);
    //next button
    $scope.next = function() {
        var next_index = current_index + 1;
        if (current_index < length - 1) {
            $scope.current_photo = queenanneFactory.getPhoto(next_index);
            current_index++;
        }       
        if (current_index === length - 1) {
            $scope.nextButton = true;
        }
        else {
            $scope.nextButton = false;
        }
        if (current_index === 1) {
            $scope.previousButton = true;
        }
        else {
            $scope.previousButton = false;
        }
    };
    //previous button
    $scope.previous = function() {
        var previous_index = current_index - 1;
        if (current_index > 1) {
            $scope.current_photo = queenanneFactory.getPhoto(previous_index);
            current_index--;
        }
        if (current_index === length - 1) {
            $scope.nextButton = true;
        }
        else {
            $scope.nextButton = false;
        }
        if (current_index === 1) {
            $scope.previousButton = true;
        }
        else {
            $scope.previousButton = false;
        }
    };
}])
.controller('FremontController', ['$scope', 'fremontFactory', function($scope, fremontFactory) {
    $scope.nextButton = false
    $scope.previousButton = true;
    $scope.photo = fremontFactory.getPhoto(0);
    //create a photo slideshow
    $scope.photos = fremontFactory.getPhotos();
    var length = $scope.photos.length;
    var current_index = 1;
    $scope.image_number = length - 1;
    $scope.current_photo = fremontFactory.getPhoto(current_index);
    //next button
    $scope.next = function() {
        var next_index = current_index + 1;
        if (current_index < length - 1) {
            $scope.current_photo = fremontFactory.getPhoto(next_index);
            current_index++;
        }
           
        if (current_index === length - 1) {
            $scope.nextButton = true;
        }
        
        else {
            $scope.nextButton = false;
        }
        if (current_index === 1) {
            $scope.previousButton = true;
        }
        else {
            $scope.previousButton = false;
        }
    };
    //previous button
    $scope.previous = function() {
        var previous_index = current_index - 1;
        if (current_index > 1) {
            $scope.current_photo = fremontFactory.getPhoto(previous_index);
            current_index--;
        }  
        if (current_index === length - 1) {
            $scope.nextButton = true;
        }
        else {
            $scope.nextButton = false;
        }
        if (current_index === 1) {
            $scope.previousButton = true;
        }
        else {
            $scope.previousButton = false;
        }
    };
}])
.controller('DowntownController', ['$scope', 'downtownFactory', function($scope, downtownFactory) {
    $scope.nextButton = false
    $scope.previousButton = true;
    $scope.photo = downtownFactory.getPhoto(0);
    //create a photo slideshow
    $scope.photos = downtownFactory.getPhotos();
    var length = $scope.photos.length;
    var current_index = 1;
    $scope.image_number = length - 1;
    $scope.current_photo = downtownFactory.getPhoto(current_index);
    //next button
    $scope.next = function() {
        var next_index = current_index + 1;
        if (current_index < length - 1) {
            $scope.current_photo = downtownFactory.getPhoto(next_index);
            current_index++;
        } 
        if (current_index === length - 1) {
            $scope.nextButton = true;
        }
        else {
            $scope.nextButton = false;
        }
        if (current_index === 1) {
            $scope.previousButton = true;
        }
        else {
            $scope.previousButton = false;
        }
    };
    //previous button
    $scope.previous = function() {
        var previous_index = current_index - 1;
        if (current_index > 1) {
            $scope.current_photo = downtownFactory.getPhoto(previous_index);
            current_index--;
        }
        if (current_index === length - 1) {
         $scope.nextButton = true;
        }
        else {
            $scope.nextButton = false;
        }
        if (current_index === 1) {
            $scope.previousButton = true;
        }
        else {
            $scope.previousButton = false;
        }
    };
    
}])
.controller('KerryParkController', ['$scope', 'kerryparkFactory', function($scope, kerryparkFactory) {
    $scope.nextButton = false
    $scope.previousButton = true;
    $scope.photo = kerryparkFactory.getPhoto(0);
    //create a photo slideshow
    $scope.photos = kerryparkFactory.getPhotos();
    var length = $scope.photos.length;
    var current_index = 0;
    $scope.image_number = length;
    $scope.current_photo = kerryparkFactory.getPhoto(current_index);
    //next button
    $scope.next = function() {
        var next_index = current_index + 1;
        if (current_index < length) {
            $scope.current_photo = kerryparkFactory.getPhoto(next_index);
            current_index++;
        }
           
        if (current_index === length - 1) {
            $scope.nextButton = true;
        }
        
        else {
            $scope.nextButton = false;
        }
        if (current_index === 0) {
            $scope.previousButton = true;
        }
        else {
            $scope.previousButton = false;
        }
    };
    //previous button
    $scope.previous = function() {
        var previous_index = current_index - 1;
        if (current_index > 0) {
            $scope.current_photo = kerryparkFactory.getPhoto(previous_index);
            current_index--;
        }
        if (current_index === length - 1) {
            $scope.nextButton = true;
        } 
        else {
            $scope.nextButton = false;
        }
        if (current_index === 0) {
            $scope.previousButton = true;
        }
        else {
            $scope.previousButton = false;
        }
    };
}])

.controller('GasWorksParkController', ['$scope', 'gasworksparkFactory', function($scope, gasworksparkFactory) {
    $scope.nextButton = false
    $scope.previousButton = true;
    $scope.photo = gasworksparkFactory.getPhoto(0);
    //create a photo slideshow
    $scope.photos = gasworksparkFactory.getPhotos();
    var length = $scope.photos.length;
    var current_index = 0;
    $scope.image_number = length;
    $scope.current_photo = gasworksparkFactory.getPhoto(current_index);
    //next button
    $scope.next = function() {
        var next_index = current_index + 1;
        if (current_index < length) {
            $scope.current_photo = gasworksparkFactory.getPhoto(next_index);
            current_index++;
        }  
        if (current_index === length - 1) {
         $scope.nextButton = true;
        }
        else {
            $scope.nextButton = false;
        }
        if (current_index === 0) {
         $scope.previousButton = true;
        }
        else {
            $scope.previousButton = false;
        }
    };
    //previous button
    $scope.previous = function() {
        var previous_index = current_index - 1;
        if (current_index > 0) {
            $scope.current_photo = gasworksparkFactory.getPhoto(previous_index);
            current_index--;
        }   
        if (current_index === length - 1) {
            $scope.nextButton = true;
        }
        else {
            $scope.nextButton = false;
        }
        if (current_index === 0) {
            $scope.previousButton = true;
        }
        else {
            $scope.previousButton = false;
        }
    };
}])

.controller('AmazonController', ['$scope', 'amazonFactory', function($scope, amazonFactory) {
    $scope.nextButton = false
    $scope.previousButton = true;
    $scope.photo = amazonFactory.getPhoto(0);
    //create a photo slideshow
    $scope.photos = amazonFactory.getPhotos();
    var length = $scope.photos.length;
    var current_index = 1;
    $scope.image_number = length - 1;
    $scope.current_photo = amazonFactory.getPhoto(current_index);
    //next button
    $scope.next = function() {
        var next_index = current_index + 1;
        if (current_index < length - 1) {
            $scope.current_photo = amazonFactory.getPhoto(next_index);
            current_index++;
        }  
        if (current_index === length - 1) {
         $scope.nextButton = true;
        }
        else {
            $scope.nextButton = false;
        }
        if (current_index === 1) {
         $scope.previousButton = true;
        }
         else {
            $scope.previousButton = false;
        }
    };
    //previous button
    $scope.previous = function() {
        var previous_index = current_index - 1;
        if (current_index > 1) {
            $scope.current_photo = amazonFactory.getPhoto(previous_index);
            current_index--;
        }
        if (current_index === length - 1) {
         $scope.nextButton = true;
        }
        else {
            $scope.nextButton = false;
        }
        if (current_index === 1) {
         $scope.previousButton = true;
        }
         else {
            $scope.previousButton = false;
        }
    };
    
}])
.controller('GoogleController', ['$scope', 'googleFactory', function($scope, googleFactory) {
    $scope.nextButton = false
    $scope.previousButton = true;

    $scope.photo = googleFactory.getPhoto(0);
    //create a photo slideshow
    $scope.photos = googleFactory.getPhotos();
    var length = $scope.photos.length;
    var current_index = 1;
    $scope.image_number = length - 1;
    $scope.current_photo = googleFactory.getPhoto(current_index);
    //next button
    $scope.next = function() {
        var next_index = current_index + 1;
        if (current_index < length - 1) {
            $scope.current_photo = googleFactory.getPhoto(next_index);
            current_index++;
        }
        if (current_index === length - 1) {
         $scope.nextButton = true;
        }
        else {
            $scope.nextButton = false;
        }
        if (current_index === 1) {
         $scope.previousButton = true;
        }
         else {
            $scope.previousButton = false;
        }
    };
    //previous button
    $scope.previous = function() {
        var previous_index = current_index - 1;
        if (current_index > 1) {
            $scope.current_photo = googleFactory.getPhoto(previous_index);
            current_index--;
        }
        if (current_index === length - 1) {
         $scope.nextButton = true;
        }
        else {
            $scope.nextButton = false;
        }
        if (current_index === 1) {
         $scope.previousButton = true;
        }
         else {
            $scope.previousButton = false;
        }
    };
}])

.controller('FacebookController', ['$scope', 'facebookFactory', function($scope, facebookFactory) {
    $scope.nextButton = false
    $scope.previousButton = true;
    $scope.photo = facebookFactory.getPhoto(0);
    //create a photo slideshow
    $scope.photos = facebookFactory.getPhotos();
    var length = $scope.photos.length;
    var current_index = 1;
    $scope.image_number = length - 1;
    $scope.current_photo = facebookFactory.getPhoto(current_index);
    
    //next button
    $scope.next = function() {
        var next_index = current_index + 1;
        if (current_index < length - 1) {
            $scope.current_photo = facebookFactory.getPhoto(next_index);
            current_index++;
        }
        if (current_index === length - 1) {
         $scope.nextButton = true;
        }
        else {
            $scope.nextButton = false;
        }
        if (current_index === 1) {
         $scope.previousButton = true;
        }
         else {
            $scope.previousButton = false;
        }
    };
    
    //previous button
    $scope.previous = function() {
        var previous_index = current_index - 1;
        if (current_index > 1) {
            $scope.current_photo = facebookFactory.getPhoto(previous_index);
            current_index--;
        }
        if (current_index === length - 1) {
         $scope.nextButton = true;
        }
        else {
            $scope.nextButton = false;
        }
        if (current_index === 1) {
         $scope.previousButton = true;
        }
         else {
            $scope.previousButton = false;
        }
    };  
}])

.controller('VideoController', ['$scope', 'videoFactory', function($scope, videoFactory) {

  $scope.videos = videoFactory.getVideos();

}])


.controller('MicrosoftController', ['$scope', 'microsoftFactory', function($scope, microsoftFactory) {
    $scope.nextButton = false
    $scope.previousButton = true;
    $scope.photo = microsoftFactory.getPhoto(0);
    //create a photo slideshow
    $scope.photos = microsoftFactory.getPhotos();
    var length = $scope.photos.length;
    var current_index = 1;
    $scope.image_number = length - 1;
    $scope.current_photo = microsoftFactory.getPhoto(current_index);
    //next button
    $scope.next = function() {
        var next_index = current_index + 1;
        if (current_index < length - 1) {
            $scope.current_photo = microsoftFactory.getPhoto(next_index);
            current_index++;
        }
        if (current_index === length - 1) {
         $scope.nextButton = true;
        }
        else {
            $scope.nextButton = false;
        }
        if (current_index === 1) {
         $scope.previousButton = true;
        }
         else {
            $scope.previousButton = false;
        }
    };
    
    //previous button
    $scope.previous = function() {
        var previous_index = current_index - 1;
        if (current_index > 1) {
            $scope.current_photo = microsoftFactory.getPhoto(previous_index);
            current_index--;
        }
        
        if (current_index === length - 1) {
         $scope.nextButton = true;
        }
        
        else {
            $scope.nextButton = false;
        }
        if (current_index === 1) {
         $scope.previousButton = true;
        }
         else {
            $scope.previousButton = false;
        }
    };
}])

.controller('VideoController', ['$scope', 'videoFactory', function($scope, videoFactory) {
    $scope.videos = videoFactory.getVideos();  
}])

.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        var video_id = url.split('v=')[1].split('&')[0];
        return $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + video_id);
    };
}])

.controller('HotelController', ['$scope', 'hotelFactory', function($scope, hotelFactory) {
    $scope.clickName = true;
    $scope.clickPrice = false;
    $scope.clickRating = false;
    $scope.hotels = hotelFactory.getHotels();
    $scope.sortbyname = function() {
        $scope.sortprice = "";
        $scope.sortrating = "";
        $scope.sortname = "name";
        $scope.clickPrice = false;
        $scope.clickRating = false;
        $scope.clickName = true;
    } 
    
    $scope.sortbyprice = function() {
        $scope.sortprice = "price";
        $scope.sortrating = "";
        $scope.sortname = "";
        $scope.clickPrice = true;
        $scope.clickRating = false;
        $scope.clickName = false;
    }
        
    $scope.sortbyrating = function() {
        $scope.sortprice = "";
        $scope.sortname = "";
        $scope.sortrating = "rating";
        $scope.clickPrice = false;
        $scope.clickRating = true;
        $scope.clickName = false;
    } 
}]);




    