<?php
if (isset($_POST['contact-btn'])) {
    $Name = $_POST['name'];
    $Phone = $_POST['phone'];
    $Email = $_POST['email'];
    $Msg = $_POST['message'];
    $Subject = $_POST['subject'];

    if (isset($_POST['privacy'])) {
        $Privacy = "Yes";
    }

    $Msg2 = "Name: " . $Name . "\nPhone no: " . $Phone . "\nEmail: " . $Email . "\nMessage: " . $Msg . "Accepted privacy policy:" . $Privacy;
    if (empty($Name) || empty($Email) || empty($Subject) || empty($Phone)) {
        header('location:/contact-us?error');
    } else {
        $to = "info@primedtalent.de";
        // $to = "mohammedismail97420@gmail.com";

        if (mail($to, $Subject, $Msg2, $Email)) {
            header("location:/contact-us?success");
        }
    }
} else {
    header("location:contact-us");
}
