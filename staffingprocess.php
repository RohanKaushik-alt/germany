<?php
if (isset($_POST['btn-send2'])) {
    $Name = $_POST['name'];
    $Email = $_POST['email'];
    $Phone = $_POST['phone'];
    $Company = $_POST['company'];
    $NoOfEmp = $_POST['noofemp'];
    $HowHear = $_POST['how-hear'];
    $Subject = "Staffing Expertise";

    if (isset($_POST['privacy'])) {
        $Privacy = "Yes";
    }

    if ($Name != "" && $Email != "" && $Phone != "" && $Company != "" && $NoOfEmp != "" && $HowHear != "") {

        $Msg2 = "Name: " . $Name . "\nEmail: " . $Email . "\nPhone: " . $Phone . "\nCompany: " . $Company . "\nHow many employees are you looking to hire: " . $NoOfEmp . "\nHow I heard: " . $HowHear . "Accepted privacy policy:" . $Privacy;

        if (empty($Msg2)) {
            header('location:staffing-expertise?error');
        } else {
            $to = "info@primedtalent.de";
            // $to = "mohammedismail97420@gmail.com";

            if (mail($to, $Subject, $Msg2, $Email)) {
                header("location:staffing-expertise?success");
            } else {
                header("location:staffing-expertise?error");
            }
        }
    } else {
        header("location:staffing-expertise?error");
    }
}
