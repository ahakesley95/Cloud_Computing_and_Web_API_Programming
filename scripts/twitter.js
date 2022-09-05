/**
 * @author Alex Hakesley w16011419
 * @description Contains functions related to twitter tasks in assignment
 */

$(function () {
    // get and display tweets
    $.getJSON("twitter_feed.php", function (data) {
        $.each(data.statuses, function(idx, tweetObj) {
            var location = "";
            if (tweetObj.place != null && tweetObj.user.location != null) {
                var address = (tweetObj.place != null) ? tweetObj.place.full_name + ", " + tweetObj.place.country : tweetObj.user.location;
                location = "<p class='geo-data'>" + address + "</p>";
                // check if location is in United Kingdom
                if (address.includes("United Kingdom")) {
                    // add corresponding tweet to google map
                    $.addMarkerToMap(tweetObj);
                    console.log(JSON.stringify(tweetObj));
                }
            }
            
            var element =  "<div class='tweet-user-info'> \
                                <img src='" + tweetObj.user.profile_image_url_https + "'/> \
                                <div class='tweet-user-names'> \
                                    <h3>" + tweetObj.user.name + "</h2> \
                                    <h4>@" + tweetObj.user.screen_name + "</h3> \
                                    <p class='tweet-content'>" + tweetObj.full_text + "</p>" +
                                    location + 
                                "</div> \
                            </div>";
            // add tweet item to list of tweets
            $("#tweet-feed").append("<li class='tweet-li'>" + element + "</li>");
        })
    })

    // update twitter post button when textarea is updated
    $("#tweet-textarea").bind("input propertychange", function () {
        // if it has a value, enable the 'Tweet' button
        if ($("#tweet-textarea").val().length > 0) {
            $("#post-tweet").prop("disabled", false);
            $("#post-tweet").css("opacity", 1);
            $("#post-tweet").css("cursor", "pointer");
        } else {
        // if it has no value, disable the tweet button
            $("#post-tweet").prop("disabled", true);
            $("#post-tweet").css("opacity", 0.5);
            $("#post-tweet").css("cursor", "not-allowed");
        }
    })
})