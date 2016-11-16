<?php
/**
 * Created by IntelliJ IDEA.
 * User: Tom
 * Date: 11/11/16
 * Time: 14:12
 */
// Start Session
if (!$_COOKIE["sessionid"]) {
    header("Location: login.html");
}
// Redirect on Success
if (($_POST["user name"] == "guest") || ($_POST["password"] == "welcome")) {
    // Make cookies and session
    session_start();
    setcookie("sessionid", $_SESSION, time() + 60);
    setcookie("logintime", time(), time() + 60);
    header("Location: success.html");
}
if ($_POST["exit"]) {
    setcookie("sessionid", "", time() - 1);
    setcookie("logintime", "", time() - 1);
    session_destroy();
}