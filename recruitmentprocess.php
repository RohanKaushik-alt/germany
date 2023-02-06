<?php
if (isset($_POST['btn-send'])) {
    $Name = $_POST['name'];
    $Email = $_POST['email'];
    $Phone = $_POST['phone'];
    $OrgName = $_POST['orgname'];
    $NoOfEmp = $_POST['noofemp'];
    $EngModel = $_POST['engmodel'];
    $HowHear = $_POST['how-hear'];
    $Subject = "Employers Information";

    if (isset($_POST['privacy'])) {
        $Privacy = "Yes";
    }

    $Msg2 = "Name: " . $Name . "\nEmail: " . $Email . "\nPhone: " . $Phone . "\nOrganization Name: " . $OrgName . "\nNumber of employees needed: " . $NoOfEmp . "\nPreferred Engagement model: " . $EngModel . "\nHow I heard: " . $HowHear . "Accepted privacy policy:" . $Privacy;


    if (empty($Msg2)) {
        header('location:corporate-talent?error');
    } else {
        $to = "info@primedtalent.de";
        // $to = "mohammedismail97420@gmail.com";

        if (mail($to, $Subject, $Msg2, $Email)) {
            header("location:corporate-talent?success");
        }
    }
} else {
    header("location:corporate-talent");
}
