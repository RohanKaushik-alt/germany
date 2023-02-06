<?php
if (isset($_POST['home-send'])) {
    $Name = $_POST['name'];
    $Phone = $_POST['phone'];
    $Email = $_POST['email'];
    // $Msg = $_POST['message'];
    $Subject = "Home Page - Get in touch";

    if (isset($_POST['privacy'])) {
        $Privacy = "Yes";
    }

    $Msg2 = "Name: " . $Name . "\nPhone no: " . $Phone . "\nEmail: " . $Email . "Accepted privacy policy:" . $Privacy;
    if (empty($Name) || empty($Email) || empty($Subject) || empty($Phone)) {
        header('location:/?error');
    } else {
        $to = "info@primedtalent.de";
        // $to = "mohammedismail97420@gmail.com";

        if (mail($to, $Subject, $Msg2, $Email)) {
            header("location:/?success");
        }
    }
} else {
    header("location:/");
}
