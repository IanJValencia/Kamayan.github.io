<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve form data
    $tableSize = $_POST["table-size"];
    $day = $_POST["day"];
    $time = $_POST["time"];
    $email = $_POST["email"];

    // Validate form data
    if (empty($tableSize) || empty($day) || empty($time) || empty($email)) {
        // Redirect back to the reservation page with an error message
        header("Location: reservation.html?error=Please fill all fields");
        exit;
    }

    // Create a reservation details message
    $reservationDetails = "Table Size: $tableSize\n";
    $reservationDetails .= "Date: $day\n";
    $reservationDetails .= "Time: $time\n";
    $reservationDetails .= "Email: $email\n";
    $reservationDetails .= "--------------------------\n";

    // Save reservation details to a file
    $filename = "reservations.txt";
    $fileDirectory = "./";
    file_put_contents($fileDirectory . $filename, $reservationDetails, FILE_APPEND | LOCK_EX);

    // Send a confirmation email to the user
    $to = $email;
    $subject = "Reservation Confirmation";
    $message = "Thank you for your reservation!\n\nHere are your reservation details:\n\n$tableSize table on $day at $time.\n\nWe look forward to seeing you!\n\nBest regards,\nThe Kabayan Team";
    $headers = "From: your_email@example.com"; // Replace with your actual email address
    <?php
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        // Retrieve form data
        $tableSize = $_POST["table-size"];
        $day = $_POST["day"];
        $time = $_POST["time"]; // Add the selected time slot to the reservation details
        $email = $_POST["email"];
    
        // ... (validation and reservation details code) ...
    
        // Send a confirmation email to the user
        // ... (email code) ...
    
        // Redirect back to the reservation page with a success message
        header("Location: thank-you.php");
        exit;
    }
    ?>
    
}
?>
