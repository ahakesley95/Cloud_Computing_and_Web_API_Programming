<?php
header('Content-type: application/json');
require "vendor/autoload.php";
require "config/config.php";
use Abraham\TwitterOAuth\TwitterOAuth;

// create a new TwitterOAuth instance and send request for 25 recent tweets
// with #climatechange or #netzero tags, that are not replies or retweets,
// that show the full tweet and are in English.
try {
    $connection = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET);
    $content = $connection->get("search/tweets", ["q" => "#climatechange OR #netzero -filter:retweets -filter:replies filter:safe", "tweet_mode" => "extended", "count" => "25", "lang" => "en"]);
} catch (Exception $e) {
    echo $e->getMessage();
}

echo(json_encode($content));
?>