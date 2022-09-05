## About
This work been produced as part of Cloud Computing and Web API Programming (KF6013) at the University of Northumbria at Newcastle.

The purpose of this assignment was to develop a website for a fictional client, Sustainable North East, which combines data from a number of APIs to provide a visual representation of climate change discussion. 

One of the main tasks for this assignment was to create a server using Microsoft Azure (or another cloud service provider) and then host the website using it. This website was hosted on a LAMP server using Azure. 

Tweets posted from the UK using the hashtags '#climatechange' or '#netzero' (obtained using the Twitter API) are then displayed as a marker on the map with a relevant icon (using the Google Maps API). Hovering over a marker with the mouse displays the full content of the tweet. 

Local weather data for the client's postcode (NE1 8ST) is provided by default using the OpenWeatherMap API. Each time a map marker is clicked, the weather data is refreshed with data local to the postcode of the selected tweet. 





