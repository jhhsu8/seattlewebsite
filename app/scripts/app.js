"use strict";

var routerApp = angular.module("routerApp", ["ui.router"]);
routerApp.config(
	["$stateProvider", "$urlRouterProvider",
		function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");
			$stateProvider
				.state("app", {
					url: "/",
					views: {
						'header': {
							templateUrl: "views/header.html"
						},
						'content': {
							templateUrl: "views/home.html"
						},
						'footer': {
							templateUrl: "views/footer.html"
						}
					}
				})
				.state("app.about", {
					url: "about",
					views: {
						"content@": {
							templateUrl: "views/about.html"
						}
					}
				})
				.state("app.courses", {
					url: "courses",
					views: {
						'content@': {
							templateUrl: "views/courses.html"
						}
					}
				})
				.state("app.education", {
					url: "education",
					views: {
						"content@": {
							templateUrl: "views/education.html"
						}
					}
				})
				.state("app.awards", {
					url: "awards",
					views: {
						"content@": {
							templateUrl: "views/awards.html"
						}
					}
				})
				.state("app.travel", {
					url: "travel",
					views: {
						"content@": {
							templateUrl: "views/travel.html",
							controller: "TravelController"
						}
					}
				})
				.state("app.visitor", {
					url: "visitor",
					views: {
						"content@": {
							templateUrl: "views/visitor.html",
							controller: "VisitorController"
						}
					}
				})
				.state("app.comments", {
					url: "comments",
					views: {
						"content@": {
							templateUrl: "views/comments.html",
							controller: "CommentController"
						}
					}
				});
		}
	]);