/**
 * @author Alex Hakesley w16011419
 * @description Contains functions related to displaying weather data
 */

$(function () {
    // declare address for SNE HQ and display default weather information
    var lat = 54.97690;
    var long = -1.60777;
    getWeatherData(lat, long);
});

// calls weather api with lat and long parameters
function getWeatherData(lat, long) {
    var apiKey = "MY_KEY";
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=" + apiKey, function (result) {
        var location = (result.name == null) ? "Not Available" : result.name;
        var element = "<img id='weather-icon' src='" + getWeatherIcon(result.weather[0].icon) + "' alt='" + result.weather[0].description + "'/> \
                        <div id='weather-info'> \
                            <div id='weather-info-weather'> \
                                <h2>" + Math.round(result.main.temp - 273.15) + "°C</h2> \
                                <h3>" + result.weather[0].main + "</h3> \
                            </div> \
                            <div id='weather-info-location'> \
                                <h4>" + location + "</h4> \
                                <h5>Powered by <a href='https://openweathermap.org/'>OpenWeather</a></h5> \
                            </div> \
                        </div>";
        $("#weather-container").html(element);
    })
}


// formats unix time into appropriate local time format
function formatTime(unix) {
    var dtf = new Intl.DateTimeFormat('en-GB', {
        timeStyle: 'medium',
    });
    return dtf.format(new Date(unix * 1000));
}

// returns the icon most relevant to the weatherCode
function getWeatherIcon(weatherCode) {
    var root = "../assets/images/weather/"
    var icon = "";
    switch (weatherCode) {
        case "01d":
            icon = "sun.svg";
            break;
        case "01n":
            icon = "moon.svg";
            break;
        case "02d":
            icon = "sun_cloud.svg";
            break;
        case "02n":
            icon = "moon_cloud.svg";
            break;
        case "03d":
        case "03n":
        case "04d":
        case "04n":
            icon = "cloud.svg"
            break;
        case "09d":
        case "09n":
            icon = "rain_cloud.svg";
            break;
        case "10d":
            icon = "sun_cloud_rain.svg";
            break;
        case "10n":
            icon = "moon_cloud_rain.svg";
            break;
        case "11d":
            icon = "sun_cloud_storm.svg";
            break;
        case "11n":
            icon = "moon_cloud_storm.svg";
            break;
        case "13d":
            icon = "sun_cloud_snow.svg";
            break;
        case "13n":
            icon = "moon_cloud_snow.svg";
            break;
        case "50d":
            icon = "sun_cloud_fog.svg";
            break;
        case "50n":
            icon = "moon_cloud_fog.svg";
            break;
    }
    var path = root.concat(icon);
    return path;
}