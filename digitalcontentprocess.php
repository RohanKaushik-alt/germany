<?php
if (isset($_POST['contentbtn-send'])) {
    $Name = $_POST['name'];
    $Phone = $_POST['phone'];
    $Email = $_POST['email'];
    $Msg = $_POST['message'];
    $Subject = $_POST['subject'];

    $Msg2 = "Name: " . $Name . "\nPhone no: " . $Phone . "\nEmail: " . $Email . "\nMessage: " . $Msg;
    if (empty($Name) || empty($Email) || empty($Subject) || empty($Phone)) {
        header('location:/digital-content?error');
    } else {
        $to = "info@primedtalent.de";
        // $to = "mohammedismail97420@gmail.com";

        if (mail($to, $Subject, $Msg2, $Email)) {
            header("location:/digital-content?success");
        }
    }
} else {
    header("location:digital-content");
}
