/**
 * @author Alex Hakesley w16011419
 * 
 */

var map;
var geocoder;
var origin;
var destination;
var bounds;
var hqLocation;
var directionsService;
var directionsDisplay;

// Initialise the map and related services
function initMap() {
    var myLatLng = {lat: 54.97328, lng: -1.61396};
    var mapOptions = {
        center: myLatLng, 
        zoom: 13,
        maxZoom: 13,
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    bounds = new google.maps.LatLngBounds();
    hqLocation = "Newcastle upon Tyne, NE1 8ST";
    
    directionsDisplay = new google.maps.DirectionsRenderer();
    directionsService = new google.maps.DirectionsService();
    geocoder = new google.maps.Geocoder();
}
window.initMap = initMap;


$(function () { 
    // queries the google DistanceMatrixService to calculate distance between 'origin' and 'destination'
    calculateDistance = function(origin, destination) {
        var service = new google.maps.DistanceMatrixService();
    
        service.getDistanceMatrix({
            origins: [origin],
            destinations: [destination],
            travelMode: 'DRIVING',
            unitSystem: google.maps.UnitSystem.IMPERIAL
        }, callback)
    
        function callback(response, status) {
            if (status == google.maps.DistanceMatrixStatus.OK) {
                var origins = response.originAddresses;
                var destinations = response.destinationAddresses;
    
                $.each(origins, function (originIdx) {
                    var results = response.rows[originIdx].elements;
                    $.each(results, function(resultIdx) {
                        var element = results[resultIdx];
                        var distance = element.distance.text;
                        var duration = element.duration.text;
                        var from = origins[originIdx];
                        var to = destinations[resultIdx];
    
                        // display distance result in HTML
                        $("#dms-result").html("<p>Travelling from " + from + ' to ' + to + ' is ' + distance + ' miles and will take ' + duration + "</p>");
                    });
                });
            }
        };
    }
    
    getDirections = function(origin, destination) {
        var request = {
            origin: origin,
            destination: destination,
            travelMode: 'DRIVING',
            unitSystem: google.maps.UnitSystem.IMPERIAL,
        }
    
        directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setMap(map);
                directionsDisplay.setPanel(document.getElementById("directions-panel"));
                directionsDisplay.setDirections(response);
            }
        })
    }

    $.addMarkerToMap = function(tweetObj) {
        geocoder.geocode({'address': tweetObj.place.full_name + ", " + tweetObj.place.country}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var position = results[0].geometry.location;
                var marker = new google.maps.Marker({
                    map: map,
                    position: position,
                    icon: {
                        url: getRelevantIcon(tweetObj.full_text),
                        scaledSize: new google.maps.Size(50, 50),
                    },
                });
                
                // fit map window to added markers.
                bounds.extend(position);
                map.fitBounds(bounds);

                // add tweet content to infoWindow
                var content =  "<div class='tweet-user-info'> \
                                    <img src='" + tweetObj.user.profile_image_url_https + "'/> \
                                    <div class='tweet-user-names'> \
                                        <h3>" + tweetObj.user.name + "</h2> \
                                        <h4>@" + tweetObj.user.screen_name + "</h3> \
                                        <p class='tweet-content'>" + tweetObj.full_text + "</p> \
                                    </div> \
                                </div>";
    
                var infoWindow = new google.maps.InfoWindow({
                    content: content,
                });
    
                // add 'click' listener to update weather information, and calculate the distance and directions
                // between this marker's location and the HQ location.
                google.maps.event.addListener(marker, 'click', function() {
                    getWeatherData(marker.getPosition().lat(), marker.getPosition().lng(), "Test");
                    calculateDistance(position, hqLocation);
                    getDirections(position, hqLocation);
                });
    
                // add listener to open infoWindow on hover.
                google.maps.event.addListener(marker, 'mouseover', function() {
                    infoWindow.open({
                        anchor: marker,
                        map: map,
                        shouldFocus: false,
                    })
                });
                
                // add listener to close infoWindow on mouseout.
                google.maps.event.addListener(marker, 'mouseout', function () {
                    infoWindow.close();
                });
            }
        })
    }
});


// get icon relevant to the hastags used in a tweet's 'content'
function getRelevantIcon(content) {
    var icon;
    content = content.toLowerCase();
    if (content.includes('#climatechange') && content.includes('#netzero')) {
        icon = "../assets/images/climatechange/combined.png";
    } else if (content.includes('#climatechange')) {
        icon = "../assets/images/climatechange/climatechange.png";
    } else if (content.includes('#netzero')) {
        icon = "../assets/images/climatechange/netzero.png";
    }
    return icon;
}


