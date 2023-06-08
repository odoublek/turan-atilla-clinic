<?php
// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Retrieve form data
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $email = $_POST['email'];
  $package = $_POST['package'];
  $message = $_POST['message'];

  // Validate form data (you can add more validation if needed)
  if (empty($name) || empty($phone) || empty($email) || empty($package) || empty($message)) {
    echo "Please fill in all the required fields.";
    exit;
  }

  // Prepare the email message
  $to = 'your-email@example.com'; // Replace with your email address
  $subject = 'Contact Form Submission';
  $body = "Name: $name\n";
  $body .= "Phone: $phone\n";
  $body .= "Email: $email\n";
  $body .= "Package: $package\n";
  $body .= "Message: $message\n";

  // Send the email
  $headers = "From: $name <$email>";
  if (mail($to, $subject, $body, $headers)) {
    echo "Thank you for your submission!";
  } else {
    echo "Oops! Something went wrong. Please try again later.";
  }
}
?>
