<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Retrieve form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Validate and sanitize the data
  // Perform necessary checks on the input values

  // Process the data (example: send an email)
  $to = 'your-email@example.com';
  $subject = 'New contact form submission';
  $body = "Name: $name\nEmail: $email\n\n$message";

  if (mail($to, $subject, $body)) {
    // Email sent successfully
    echo 'Thank you for contacting us. We will get back to you soon.';
  } else {
    // Failed to send email
    echo 'Oops! Something went wrong. Please try again later.';
  }
}
?>
