"use strict";
var routerApp = angular.module("routerApp", ["ui.router"]);
routerApp.config([
    "$stateProvider",
    "$urlRouterProvider",
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state("app", {
            url: "/",
            views: {
            header: {
                templateUrl: "views/header.html"
            },

            sidebar: {
                templateUrl: "views/sidebar.html"
            },

            content: {
                templateUrl: "views/home.html"
            },
            footer: {
                templateUrl: "views/footer.html"
            }
            }
        })
            .state("app.seattle_introduction", {
            url: "seattle_introduction",
            views: {
                "content@": {
                    templateUrl: "views/seattle_introduction.html"
                }
            }
        })
            .state("app.seattle_public_transportation", {
            url: "seattle_public_transportation",
            views: {
                "content@": {
                    templateUrl: "views/seattle_public_transportation.html"
                }
            }
        })
            .state("app.seattle_neighborhoods", {
            url: "seattle_neighborhoods",
            views: {
                "content@": {
                    templateUrl: "views/seattle_neighborhoods.html"
                }
            }
        })
            .state("app.seattle_attractions", {
            url: "seattle_attractions",
            views: {
                "content@": {
                    templateUrl: "views/seattle_attractions.html"
                }
            }
        })
            .state("app.seattle_tech", {
            url: "seattle_tech",
            views: {
                "content@": {
                templateUrl: "views/seattle_tech.html"
                }
            }
        })
            .state("app.queen_anne_seattle", {
            url: "queen_anne_seattle",
            views: {
                "content@": {
                templateUrl: "views/queen_anne_seattle.html"
                }
            }
        })
            .state("app.fremont_seattle", {
            url: "fremont_seattle",
            views: {
                "content@": {
                templateUrl: "views/fremont_seattle.html"
                }
            }
        })
            .state("app.downtown_seattle", {
            url: "downtown_seattle",
            views: {
                "content@": {
                templateUrl: "views/downtown_seattle.html"
                }
            }
        })
            .state("app.seattle_parks", {
            url: "seattle_parks",
            views: {
                "content@": {
                templateUrl: "views/seattle_parks.html"
                }
            }
        })
            .state("app.seattle_retails", {
            url: "seattle_retails",
            views: {
                "content@": {
                templateUrl: "views/seattle_retails.html"
                }
            }
        })
            .state("app.seattle_museums", {
            url: "seattle_museums",
            views: {
                "content@": {
                templateUrl: "views/seattle_museums.html"
                }
            }
        })
            .state("app.amazon_seattle", {
            url: "amazon_seattle",
            views: {
                "content@": {
                templateUrl: "views/amazon_seattle.html"
                }
            }
        })
            .state("app.google_seattle", {
            url: "google_seattle",
            views: {
                "content@": {
                templateUrl: "views/google_seattle.html"
                }
            }
        })
            .state("app.facebook_seattle", {
            url: "facebook_seattle",
            views: {
                "content@": {
                templateUrl: "views/facebook_seattle.html"
                }
            }
        })
            .state("app.seattle_sitemap", {
            url: "seattle_sitemap",
            views: {
                "content@": {
                templateUrl: "views/seattle_sitemap.html"
                }
            }
        })
            .state("app.seattle_videos", {
            url: "seattle_videos",
            views: {
                "content@": {
                templateUrl: "views/seattle_videos.html"
                }
            }
        })
            .state("app.seattle_events", {
            url: "seattle_events",
            views: {
                "content@": {
                templateUrl: "views/seattle_events.html"
                }
            }
        })
            .state("app.seattle_directions", {
            url: "seattle_directions",
            views: {
                "content@": {
                templateUrl: "views/seattle_directions.html"
                }
            }
        })
            .state("app.seattle_hotels", {
            url: "seattle_hotels",
            views: {
                "content@": {
                templateUrl: "views/seattle_hotels.html"
                }
            }
        })
            .state("app.microsoft_seattle", {
            url: "microsoft_seattle",
            views: {
                "content@": {
                templateUrl: "views/microsoft_seattle.html"
                }
            }
        });
    }
]);
