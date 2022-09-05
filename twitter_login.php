<?php
/**
 * @author Alex Hakesley w16011419
 */

session_start();
header("Access-Control-Allow-Origin: '*'");
require 'config/config.php';
require 'vendor/autoload.php';
use Abraham\TwitterOAuth\TwitterOAuth;

$_SESSION['tweet'] = $_POST['tweet-content'];

// declare new instance of TwitterOAuth class
$connection = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET);

// get the request token and request secret, and register callback url
$request_token = $connection->oauth("oauth/request_token", array("oauth_callback" => OAUTH_CALLBACK));
$_SESSION['oauth_token'] = $request_token['oauth_token'];
$_SESSION['oauth_token_secret'] = $request_token['oauth_token_secret'];

if ($connection->getLastHttpCode()==200) {
    // if successful, redirect to OAUTH_CALLBACK url registered previously
    $url = $connection->url('oauth/authorize', array('oauth_token' => $request_token['oauth_token']));
    header('Location: '. $url);
} else {
    die('Something went wrong.'. $connection->getLastHttpCode());
}
?>
