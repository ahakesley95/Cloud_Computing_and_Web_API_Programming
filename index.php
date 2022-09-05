<!DOCTYPE html>
<html lang="en-gb">
    <head>
        <meta charset="utf-8" />
        <title>Sustainable North East</title>
        <link rel="stylesheet" href="assets/styles/style.css" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script type="text/javascript" src="scripts/maps.js"></script>
        <script type="text/javascript" src="scripts/twitter.js"></script>
        <script type="text/javascript" src="scripts/weather.js"></script>
        <script type="text/javascript" src='https://maps.googleapis.com/maps/api/js?key=MY_KEY&callback=initMap' async defer></script>
    </head>
    <body>
        <header>
            <nav>
                <h2>Sustainable North East</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="credits.php">Credits</a></li>
                </ul>
            </nav>
        </header>
        <div id="contentBody">
            <div id="container">
                <div id="left-col">
                    <div id="about-container">
                        <h3>About Sustainable North East</h3>
                        <p>Ut ut qui quis nulla ipsum ut in. Occaecat minim enim fugiat qui consectetur. Quis ad ullamco veniam veniam duis 
                            tempor excepteur velit aliquip incididunt officia dolore aliqua. Enim nulla labore fugiat eiusmod reprehenderit 
                            enim consequat non ullamco nulla nisi duis.</p>
                    </div>
                    <div id="map-container">
                        <h3>See where the conversation is</h3>
                        <p>To find out who is talking about #climatechange or #netzero, take a look at the map below. Click on a marker to see the Tweet, get the local weather and get directions to our HQ in Newcastle!</p>
                        <div id="map"></div>
                        <div id="dms-result"></div>
                        <div id="directions-panel"></div>
                    </div>
                </div>
                <div id="right-col">
                    <div id="weather-container"></div>
                    <div id="twitter-container">
                        <div id='twitter-header'>
                            <img src='assets\images\twitter\twitter-icon.png' alt='twitter icon' />
                            <h3>Join the conversation</h3>
                        </div>
                        <form id='tweet-post' action='twitter_login.php' method='POST'>
                            <textarea id='tweet-textarea' placeholder="What's happening?" maxlength='280' name='tweet-content' rows='5'></textarea>
                            <input type='submit' id='post-tweet' value='Tweet' />
                        </form>
                        <ul id="tweet-feed"></ul>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <h3>Notice</h3>
            <p>This content has been created as part of the Cloud Computing and Web API Programming (KF6013) module at
                Northumbria Univeristy by Alex Hakesley (w16011419).
            </p>
        </footer>
    </body>
</html>