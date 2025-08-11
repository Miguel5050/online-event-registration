<?php
// Example credentials — replace these later with secure database version
$valid_username = "admin";
$valid_password = "123456"; // You can hash this if needed

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    if ($username === $valid_username && $password === $valid_password) {
        // Correct login → redirect
        header("Location: view_registrations.php");
        exit();
    } else {
        // Wrong login → back to login with error
        echo "<script>alert('Invalid username or password'); window.location.href='admin_login.html';</script>";
        exit();
    }
}
?>
