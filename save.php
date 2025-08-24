<?php
// Load PHPMailer classes
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name     = $_POST['name'];
    $company  = $_POST['company'];
    $email    = $_POST['email'];
    $phone    = $_POST['phone'];
    $message  = $_POST['message'];

    // Initialize PHPMailer
    $mail = new PHPMailer(true);

    try {
        // SMTP server configuration
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';   // Gmail SMTP server
        $mail->SMTPAuth   = true;
        $mail->Username   = 'aldragoff@gmail.com';   // 🔹 Replace with your Gmail
        $mail->Password   = 'qyvt qtlh xaqj nlku';     // 🔹 Replace with your Gmail App Password
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        // Sender and recipient settings
        $mail->setFrom($email, $name);                  // From the user who filled the form
        $mail->addAddress('aldragoff@gmail.com');       // 🔹 Your Gmail to receive the messages

        // Email content
        $mail->isHTML(true);
        $mail->Subject = "New Contact Form Submission";
        $mail->Body    = "
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> {$name}</p>
            <p><strong>Company:</strong> {$company}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Phone:</strong> {$phone}</p>
            <p><strong>Message:</strong><br>{$message}</p>
        ";

        // Send email
        if ($mail->send()) {
            echo "<script>alert('Your message has been sent successfully!'); window.location.href='contact.html';</script>";
        } else {
            echo "<script>alert('Sorry, your message could not be sent.'); window.location.href='contact.html';</script>";
        }
    } catch (Exception $e) {
        echo "Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Invalid Request";
}
?>


