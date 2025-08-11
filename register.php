<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Include database connection
    require_once "db_config.php";

    // Get form data
    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $phone = trim($_POST["phone"]);
    $event = trim($_POST["event"]);

    // Basic validation
    if (empty($name) || empty($email) || empty($phone) || empty($event)) {
        die("All fields are required.");
    }

    // Sanitize input
    $name = htmlspecialchars($name);
    $email = htmlspecialchars($email);
    $phone = htmlspecialchars($phone);
    $event = htmlspecialchars($event);

    // Prepare SQL statement
    $stmt = $conn->prepare("INSERT INTO registrations (name, email, phone, event) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $email, $phone, $event);

    // Execute and check
    if ($stmt->execute()) {
        header("Location: success.html");
        exit();
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
