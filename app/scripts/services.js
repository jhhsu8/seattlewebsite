"use strict";
var routerApp = angular.module("routerApp");

//define a service called photoFactory
routerApp
  .service("photoFactory", function() {
    var photos = [
      {
        id: 0,
        name: "Chihuly Garden and Glass",
        image: "../images/chihuly.jpg"
      },
      {
        id: 1,
        name: "The view of Downtown Seattle",
        image: "../images/downtownseattle1.jpg"
      },
      {
        id: 2,
        name: "The skyline view from Kerry Park",
        image: "../images/kerrypark3.jpg"
      },
      {
        id: 3,
        name: "Olympic Mountains, Seattle, and Lake Washington",
        image: "../images/olympic.jpg"
      },
      {
        id: 4,
        name: "Pike Place Market",
        image: "../images/pikeplacemarket2.jpg"
      },
      {
        id: 5,
        name: "The Space Needle at Seattle Center",
        image: "../images/seattlecenter.jpg"
      },
      {
        id: 6,
        name: "Seattle Neighborhoods around Lake Union",
        image: "../images/seattle_neighborhoods.jpg"
      },
      {
        id: 7,
        name:
          "Seattle Tech Growth Chart (source: JLL Project and Development Services)",
        image: "../images/seattletech.jpg"
      },
      {
        id: 8,
        name: "A Metro bus and a Link light rail car",
        image: "../images/seattle_transportation.jpg"
      },
      {
        id: 9,
        name: "Seattle",
        image: "../images/seattle.jpg"
      },
      {
        id: 10,
        name: "Space Needle Logo",
        image: "../images/space_needle_logo.jpg"
      }
    ];

    // implement two functions, getPhotos and getPhoto(index)
    this.getPhoto = function(index) {
      return photos[index];
    };
  })

  .service("queenanneFactory", function() {
    var photos = [
      {
        id: 0,
        name: "Queen Anne Hill",
        image: "../images/queenanne1.jpg"
      },
      {
        id: 1,
        name: "Kerry Park on Queen Anne Hill",
        image: "../images/kerrypark2.jpg"
      },
      {
        id: 2,
        name: "Coleman House in Queen Anne",
        image: "../images/queenanne.jpg"
      }
    ];

    // implement two functions, getPhotos and getPhoto(index)
    this.getPhotos = function() {
      return photos;
    };
    this.getPhoto = function(index) {
      return photos[index];
    };
  })

  .service("fremontFactory", function() {
    var photos = [
      {
        id: 0,
        name: "Fremont Bridge",
        image: "../images/fremontbridge.jpg"
      },
      {
        id: 1,
        name: "A shopping district in Fremont",
        image: "../images/pcc.jpg"
      },
      {
        id: 2,
        name: "Fremont Troll",
        image: "../images/fremont_troll.jpg"
      }
    ];

    // implement two functions, getPhotos and getPhoto(index)
    this.getPhotos = function() {
      return photos;
    };
    this.getPhoto = function(index) {
      return photos[index];
    };
  })

  .service("downtownFactory", function() {
    var photos = [
      {
        id: 0,
        name: "Downtown Seattle Waterfront with Seattle Great Wheel",
        image: "../images/downtownseattle.jpg"
      },
      {
        id: 1,
        name: "Pike Place Market",
        image: "../images/pikeplacemarket.jpg"
      },
      {
        id: 2,
        name: "Gum Wall in Post Alley under Pike Place Market",
        image: "../images/gumwall.jpg"
      }
    ];

    // implement two functions, getPhotos and getPhoto(index)
    this.getPhotos = function() {
      return photos;
    };
    this.getPhoto = function(index) {
      return photos[index];
    };
  })

  .service("kerryparkFactory", function() {
    var photos = [
      {
        id: 0,
        name: "Kerry Park",
        image: "../images/kerrypark.jpg"
      },
      {
        id: 1,
        name: "The Changing Form sculpture",
        image: "../images/kerrypark1.jpg"
      }
    ];

    // implement two functions, getPhotos and getPhoto(index)
    this.getPhotos = function() {
      return photos;
    };
    this.getPhoto = function(index) {
      return photos[index];
    };
  })

  .service("gasworksparkFactory", function() {
    var photos = [
      {
        id: 0,
        name: "Gas Works Park",
        image: "../images/gasworkspark1.jpg"
      },
      {
        id: 1,
        name: "A picnic day at Gas Works Park",
        image: "../images/gasworkspark.jpg"
      },
    
    ];

    // implement two functions, getPhotos and getPhoto(index)
    this.getPhotos = function() {
      return photos;
    };
    this.getPhoto = function(index) {
      return photos[index];
    };
  })

  .service("amazonFactory", function() {
    var photos = [
      {
        id: 0,
        name: "Amazon Spheres in South Lake Union",
        image: "../images/amazonspheres.jpg"
      },
      {
        id: 1,
        name: "A 5-year chart of Amazon stock performance (1/2013 - 12/2017)",
        image: "../images/amzn.png"
      },
      {
        id: 2,
        name: "Amazon Books in University Village",
        image: "../images/amazonbooks.jpg"
      },
      {
        id: 3,
        name: "Amazon Go in Downtown Seattle",
        image: "../images/amazongo.jpg"
      }
    ];

    // implement two functions, getPhotos and getPhoto(index)
    this.getPhotos = function() {
      return photos;
    };
    this.getPhoto = function(index) {
      return photos[index];
    };
  })

  .service("googleFactory", function() {
    var photos = [
      {
        id: 0,
        name: "A Google office in Fremont",
        image: "../images/google2.jpg"
      },
      {
        id: 1,
        name: "A 5-year chart of Google stock performance (1/2013 - 12/2017)",
        image: "../images/goog.png"
      },
      {
        id: 2,
        name: "A future Google campus in South Lake Union",
        image: "../images/google1.jpg"
      },
      {
        id: 3,
        name: "The Google campus in Fremont",
        image: "../images/google.jpg"
      }
    ];

    // implement two functions, getPhotos and getPhoto(index)
    this.getPhotos = function() {
      return photos;
    };
    this.getPhoto = function(index) {
      return photos[index];
    };
  })

  .service("facebookFactory", function() {
    var photos = [
      {
        id: 0,
        name: "A Facebook office buliding in South Lake Union",
        image: "../images/facebook2.jpg"
      },
      {
        id: 1,
        name: "A 5-year chart of Facebook stock performance (1/2013 - 12/2017)",
        image: "../images/fb.png"
      },
      {
        id: 2,
        name: "On the top of the Facebook office buliding in South Lake Union",
        image: "../images/facebook1.jpg"
      },
      {
        id: 3,
        name: "Inside a Seattle Facebook office",
        image: "../images/facebook.jpg"
      }
    ];

    // implement two functions, getPhotos and getPhoto(index)
    this.getPhotos = function() {
      return photos;
    };
    this.getPhoto = function(index) {
      return photos[index];
    };
  })

  .service("microsoftFactory", function() {
    var photos = [{
        id: 0,
        name: "A building on the Microsoft Redmond campus",
        image: "../images/microsoft1.jpg"
      },
      {
        id: 1,
        name: "A 5-year chart of Microsoft stock performance (1/2013 - 12/2017)",
        image: "../images/msft.png"
      },
      {
        id: 2,
        name: "Microsoft Store in Bellevue Square Mall",
        image: "../images/microsoft.jpg"
      },
      {
        id: 3,
        name: "The Microsoft Redmond campus",
        image: "../images/microsoft2.jpg"
      }
    ];

    // implement two functions, getPhotos and getPhoto(index)
    this.getPhotos = function() {
      return photos;
    };
    this.getPhoto = function(index) {
      return photos[index];
    };
  })

  .service("videoFactory", function() {
    var videos = [
      {
        url: "https://www.youtube.com/watch?v=d6qIgmUsUO0"
      },
      {
        url: "https://www.youtube.com/watch?v=bq-bXgpSMxE"
      },
      {
        url: "https://www.youtube.com/watch?v=FT6zUcqu42Y"
      },
      {
        url: "https://www.youtube.com/watch?v=pdO1mO6PHDU"
      }
    ];

    // implement two functions, getPhotos and getPhoto(index)

    this.getVideos = function() {
      return videos;
    };
  })

  .service("hotelFactory", function() {
    var hotels = [
      {
        id: 0,
        name: "Holiday Inn Seattle Downtown",
        rating: 4.1,
        price: 99,
        link: "https://www.ihg.com/holidayinn/hotels/us/en/seattle/seasc/hoteldetail"
      },
      {
        id: 1,
        name: "Travelodge By the Space Needle",
        rating: 3.4,
        price: 67,
        link: "http://www.travelodgeseattlecenter.com/#gref"
      },
      {
        id: 2,
        name: "Holiday Inn Express & Suites Seattle-Sea-Tac Airport",
        rating: 4.1,
        price: 90,
        link: "https://www.ihg.com/holidayinnexpress/hotels/us/en/seatac/seaib/hoteldetail"
      },
      {
        id: 3,
        name: "Holiday Inn Express & Suites Seattle-City Center",
        rating: 4,
        price: 103,
        link: "https://www.ihg.com/holidayinnexpress/hotels/us/en/seattle/seawa/hoteldetail"
      },
      {
        id: 4,
        name: "Quality Inn & Suites Seattle Center",
        rating: 3.3,
        price: 85,
        link: "http://www.qualityinnseattle.com/"
      },
      {
        id: 5,
        name: "Hyatt House Seattle/Downtown",
        rating: 4.4,
        price: 109,
        link: "https://seattledowntown.house.hyatt.com/en/hotel/home.html"
      },
      {
        id: 6,
        name: "Comfort Inn & Suites - Northgate",
        rating: 3.7,
        price: 71,
        link: "https://www.choicehotels.com/washington/seattle/comfort-inn-hotels/wa217?source=gyxt"
      },
      {
        id: 7,
        name: "Best Western Executive Inn - Downtown Seattle",
        rating: 3.9,
        price: 88,
        link: "https://www.bestwestern.com/en_US/book/seattle/hotel-rooms/best-western-executive-inn/propertyCode.48068.html"
      },
      {
        id: 8,
        name: "Holiday Inn Express & Suites North Seattle - Shoreline",
        rating: 4.1,
        price: 88,
        link: "https://www.ihg.com/holidayinnexpress/hotels/us/en/seattle/seaau/hoteldetail"
      },
      {
        id: 9,
        name: "Courtyard by Marriott Seattle Sea-Tac Area",
        rating: 4.1,
        price: 84,
        link: "https://www.marriott.com/hotels/travel/seawv-courtyard-seattle-sea-tac-area/"
      }
    ];

    this.getHotels = function() {
      return hotels;
    };
  });
