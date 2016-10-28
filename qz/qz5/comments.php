<?php
/**
 * Created by IntelliJ IDEA.
 * User: tcartwright
 * Date: 10/28/2016
 * Time: 1:41 PM
 */
extract($_POST);
$time = date("r");
$forbidden = fopen("forbidden.txt");
echo $forbidden;
$name = $_POST["username"];
$comments = $_POST["comments"];
$file = fopen("comments.txt", "a");
fwrite($file, "$name\n");
fwrite($file, "$time\n");
fwrite($file, "$comments\n\n");
