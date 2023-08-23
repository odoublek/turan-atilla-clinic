<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Process the form data
    // For demonstration purposes, you can just redirect back to the form page with a query parameter
    header("Location: contact_form.php?submitted=true");
    exit;
}
?>