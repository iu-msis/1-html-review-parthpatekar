<?php

try {
    $_POST = json_decode(
                file_get_contents('php://input'), 
                true,
                2,
                JSON_THROW_ON_ERROR
            );
}
catch (Exception $e) {
    header($_SERVER["SERVER_PROTOCOL"] . " 400 Bad Request");
    exit;
}

require("class/DbConnection.php");

// Step 0: Validate the incoming data
// This code doesn't do that, but should ...
// For example, if the date is empty or bad, this insert fails.

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();


$stmt = $db->prepare(
    'UPDATE books SET `title` = ?, `authors` = ?, `yearPublished` = ?, `publisher` = ?, `pageCount` = ?, `msrp` = ? WHERE `id` = ?'
);

$stmt->execute([
    $_POST['title'],
    $_POST['authors'],
    $_POST['yearPublished'],
    $_POST['publisher'],
    $_POST['pageCount'],
    $_POST['msrp'],
    $_POST['id']
]);


// Redirecting to the SELECT API
header('HTTP/1.1 303 See Other');
header('Location: ../books/books.php');