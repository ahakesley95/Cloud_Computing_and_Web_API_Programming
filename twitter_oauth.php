<?php
session_start();
require 'config/config.php';
require 'vendor/autoload.php';
use Abraham\TwitterOAuth\TwitterOAuth;

// get tweet content from session
$tweet = $_SESSION['tweet'];

// get request token and secret stored in $_SESSION
$request_token = [];
$request_token['oauth_token'] = $_SESSION['oauth_token'];
$request_token['oauth_token_secret'] = $_SESSION['oauth_token_secret'];

if (isset($_REQUEST['oauth_token']) && $request_token['oauth_token'] !== $_REQUEST['oauth_token']) {
    header('Location: twitter_login.php');
}

// declare a new instance of TwitterOAuth class using request token to get access token
$connection = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET, $request_token['oauth_token'], $request_token['oauth_token_secret']);
$access_token = $connection->oauth("oauth/access_token", ["oauth_verifier" => $_REQUEST['oauth_verifier']]);

// declare another new instance of TwitterOAuth class using the access token to post status update
$twitter = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET, $access_token['oauth_token'], $access_token['oauth_token_secret']);
$content = $twitter->post("statuses/update", ["status" => $tweet]);
if ($twitter->getLastHttpCode()==200) {
    header('Location: /');
} else {
    die('Error');
}
?>