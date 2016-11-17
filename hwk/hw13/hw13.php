<?php
/**
 * Created by IntelliJ IDEA.
 * User: Thomas Cartwright
 * Date: 11/15/2016
 * Time: 3:05 PM
 */
function checkLogin() {
    // Get form data
    $username = $_POST["username"];
    $password = $_POST["password"];
    // Open file
    $file = fopen("passwd.txt", "r");
    // Read file check for match
    $lines = fread($file, filesize("passwd.txt"));
    foreach (explode("\n", $lines) as $line) {
        $split_line = explode(":", $line);
        if (($username) == $split_line[0] && ($password == $split_line[1])) {
            setcookie("username", $username, 120);
        }
    }
    // Close file
    fclose($file);
}
function registerNewUser() {
    // Get form data
    $username = $_POST["username"];
    $password = $_POST["password"];
    // Open file
    $file = fopen("passwd.txt", "r");
    // Read file check for match
    $lines = fread($file, filesize("passwd.txt"));
    foreach (explode("\n", $lines) as $line) {
        $split_line = explode(":", $line);
        if ($username == $split_line[0]) {
            return;
        }
    }
    // Close file
    fclose($file);
    $file = fopen("passwd.txt", "a");
    fwrite($file, $username + ":" + $password);
    fclose($file);
}
