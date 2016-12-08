<?php
/**
 * Created by IntelliJ IDEA.
 * User: Thomas Cartwright
 * Date: 12/5/2016
 * Time: 10:29 PM
 */
$login = <<<EOD
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Test 3 Pot Luck Signup</title>
  <!-- Link Stylesheet -->
  <link rel="stylesheet" href="material.css">
  <!-- Link Javascript -->
  <script
      src="https://code.jquery.com/jquery-3.1.1.min.js"
      integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
      crossorigin="anonymous"></script>
  <script src="material.js"></script>
  <script src="dinner.js"></script>
</head>
<body>
<h1>Potluck Sign up</h1>
<form action="dinner.php">
  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <input class="mdl-textfield__input" type="text" id="username" name="username">
    <label class="mdl-textfield__label" for="username">Username</label>
  </div>
  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <input class="mdl-textfield__input" type="text" id="password" name="password">
    <label class="mdl-textfield__label" for="password">Password</label>
  </div>
  <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" type="submit">Submit</button>
  <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" type="reset">Clear</button>
</form>
</table>
</body>
</html>
EOD;
$html = <<<EOD
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Test 3 Pot Luck Signup</title>
  <!-- Link Stylesheet -->
  <link rel="stylesheet" href="material.css">
  <!-- Link Javascript -->
  <script
      src="https://code.jquery.com/jquery-3.1.1.min.js"
      integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
      crossorigin="anonymous"></script>
  <script src="material.js"></script>
  <script src="dinner.js"></script>
</head>
<body>
<h1>Potluck Sign up</h1>
<table id="signup-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Items</th>
    </tr>
  </thead>
</table>
</body>
</html>
EOD;
echo $login;
extract ($_POST);
$username = $_POST["username"];
$password = $_POST["password"];
if (($username == "guest") && ($password == "dinner")) {
    echo $html;
}
