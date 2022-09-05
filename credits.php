<?php require_once('scripts/display_pictures.php'); ?>
<!DOCTYPE html>
<html lang="en-gb">
    <head>
        <meta charset="utf-8" />
        <title>Sustainable North East</title>
        <link rel="stylesheet" href="assets/styles/style.css" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    </head>
    <body>
        <header>
            <nav>
                <h2>Sustainable North East</h2>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#">Credits</a></li>
                </ul>
            </nav>
        </header>
        <div id="contentBody">
            <div id='container'>
                <div id='col'>
                <h2>Credits</h2>
                    <p>This section lists the assets that are not original to this work and provides links to them.</p>
                    <div id='weather-credits'>
                        <h4>Weather</h4>
                        <p>The weather icons are used in the local weather widget, and are part of the <a href='https://www.iconfinder.com/iconsets/weather-color-2'>Weather Color icon pack</a> created by <a href='https://www.iconfinder.com/Neolau1119'>Sihan Liu</a> on iconfinder.com.</p>
                        <div class='weather-images'>
                            <?php get_pictures('/assets/images/weather/', '*.svg'); ?>
                        </div>
                    </div>

                    <div id='climate-change-credits'>
                        <h4>Climate Change</h4>
                        <p>The Climate Change icons, used in the Google Map to denote different tweet hashtags, were made using the following icons from <a href='https://www.flaticon.com/'>FlatIcon</a>.</p>
                        <div class='climate-change-images'>
                            <div class='climate-change-image'>
                                <a href="https://www.flaticon.com/free-icons/climate-change" title="Climate change icons created by Flat Icons"><img src="/assets/images/climatechange/climatechange.png"/></a>
                            </div>
                            <div class='climate-change-image'>
                                <a href="https://www.flaticon.com/free-icons/hand" title="Hand icons created by Freepik"><img src="assets/images/climatechange/hand.png"/></a>
                            </div>
                            <div class='climate-change-image'>
                                <a href="https://www.flaticon.com/free-icons/cycle" title="Cycle icons created by fiki"><img src="assets/images/climatechange/recycle.png"/></a>
                            </div>
                        </div>
                    </div>

                    <div id='twitter-credits'>
                        <h4>Twitter</h4>
                        <p>The <a href='https://about.twitter.com/en-gb/who-we-are/brand-toolkit'>Twitter icon</a> is used at the top of the Twitter section.</p>
                        <div class='twitter-images'>
                            <?php get_pictures('/assets/images/twitter/', '*.png'); ?>
                        </div>
                        
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