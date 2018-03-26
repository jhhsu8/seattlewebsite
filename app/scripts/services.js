"use strict";

var routerApp = angular.module("routerApp");
routerApp.service("commentFactory", function() {
    var usercomments = [];
	this.getComments = function() {
		return usercomments;
	};
});

//define a service called expenseFactory 
routerApp.service("expenseFactory", function() {
		var expenses = [{
			name: "Car Rental",
			category: "transportation",
			image: "images/car.jpg",
			price: 0
		}, {
			name: "Taxi/Share Ride",
			category: "transportation",
			image: "images/taxis.jpg",
			price: 0
		}, {
			name: "Hotel/Rental",
			category: "lodging",
			image: "images/hotel.jpg",
			price: 0
		}, {
			name: "Flight/Train/Bus",
			category: "tickets",
			image: "images/airplane.jpg",
			price: 0
		}, {
			name: "Breakfast",
			category: "foods_drinks",
			image: "images/breakfast.jpg",
			price: 0
		}, {
			name: "Lunch",
			category: "foods_drinks",
			image: "images/lunch.jpg",
			price: 0
		}, {
			name: "Dinner",
			category: "foods_drinks",
			image: "images/dinner.jpg",
			price: 0
		}, {
			name: "Souvenirs",
			category: "gifts",
			image: "images/souvenirs.jpg",
			price: 0
		}, {
			name: "Miscellaneous",
			category: "misc",
			image: "images/coffee.jpg",
			price: 0
		}];

		//implement the function called getExpenses
		this.getExpenses = function() {
			return expenses;
		};
		//Return the total price
		var total_price = 0;
		this.getPrice = function() {
			return total_price;
		};

	})

	//define a service called photoFactory 
	.service("photoFactory", function() {
		var photos = [{
			name: "Yellowstone, WY",
			image: "images/yellowstone.jpg"
		}, {
			name: "Yosemite, CA",
			image: "images/yosemite.jpg"
		}, {
			name: "Seattle, WA",
			image: "images/seattle.jpg"
		}, {
			name: "Snow Lake, WA",
			image: "images/snowlake.jpg"
		}, {
			name: "San Francisco, CA",
			image: "images/sanfran.jpg"
		}];

		// implement two functions, getPhotos and getPhoto(index)
		this.getPhotos = function() {
			return photos;
		};
		this.getPhoto = function(index) {
			return photos[index];
		};
	})

	//define a service called visitorFactory 
	.service("visitorFactory", function() {
		var regions = ["", "Africa", "America", "Asia", "Europe", "Middle East"];

		var selection = "";

		this.getSelection = function() {
			return selection;
		};
		this.getRegions = function() {
			return regions;
		};

	});