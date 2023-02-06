<?php
$postData = $uploadedFile = $statusMsg = '';
if (isset($_POST['btn-send'])) {
    $postData = $_POST;
    $Date = $_POST['date'];
    $name = $_POST['name'];
    $emailSubject = $_POST['mailsubject'];
    $email = $_POST['email'];
    $Phone = $_POST['phone'];
    $City = $_POST['city'];
    $Exp = $_POST['Exp'];
    $Noy = $_POST['years'];
    $Nom = $_POST['months'];
    $Ljr = $_POST['ljr'];
    $Industry = $_POST['industry'];
    $Indother = $_POST['indother'];
    $How = $_POST['howhear'];
    // $Reg = $_POST['registered'];
    // $RegLoc = $_POST['regYes'];
    $Howother = $_POST['howother'];
    $message = $_POST['message'];
    $headerurl = "location:aws-thankyou";

    // Period of unemployment

    $AreYouUnemployedValue = $_POST['AreYouUnemployed'];
    $periodOfUnemploymentValue = $_POST['periodOfUnemployment'];

    //  Are you registered in job centre

    $AreYouRegisteredInJobCentreValue = $_POST['AreYouRegisteredInJobCentre'];
    $PleaseMentionYourJobLocationValue = $_POST['PleaseMentionYourJobLocation'];

    // Are you registered in employment centre
    $AreYouRegisteredInEmploymentCentreValue = $_POST['AreYouRegisteredInEmploymentCentre'];
    $pleaseMentionYourEmploymentCentreValue = $_POST['pleaseMentionYourEmploymentCentre'];


    if (isset($_POST['privacy'])) {
        $Privacy = "Yes";
    }

    if ($How == "Others") {
        $How = "Others (" . $Howother . ")";
    }
    if ($Industry == "Others") {
        $Industry = "Others (" . $Indother . ")";
    }

    //  Period of unemployment
    if ($AreYouUnemployedValue == "Yes" || $AreYouUnemployedValue == "Ja" ) {
        $AreYouUnemployedValue = "Yes, period: " . $periodOfUnemploymentValue;
    }

    // Are you registered in job centre

    if ($AreYouRegisteredInJobCentreValue == "Yes" || $AreYouRegisteredInJobCentreValue == "Ja") {
        $AreYouRegisteredInJobCentreValue = "Yes, Location: " . $PleaseMentionYourJobLocationValue;
    }

    // Are you registered in employment centre

    if ($AreYouRegisteredInEmploymentCentreValue == "Yes" || $AreYouRegisteredInEmploymentCentreValue == "Ja") {
        $AreYouRegisteredInEmploymentCentreValue = "Yes, Location: " . $pleaseMentionYourEmploymentCentreValue;
    }


    $Msg2 = '<p><b>Name: </b>' . $name . '</p>
    <p><b>Email: </b>' . $email . '</p>
    <p><b>Phone no: </b>' . $Phone . '</p>
    <p><b>City: </b>' . $City . '</p>
    <p><b>Has work Experience: </b>' . $Exp . '</p>
    <p><b>Cohort Date: </b>' . $Date . '</p>';

    if ($Exp == "Yes") {
        $Exp = $Noy . "y " . $Nom . "m -> " . $Ljr . " -> " . $Industry;
    }

    // if ($Reg == "Yes") {
    //     $Reg = "Yes, Location: " . $RegLoc;
    // }


    if ($Date == "") {
        $Date = "Hidden in website";
    }


    $Msg2 .= '<p><b>Experience: </b>' . $Exp . '</p>
    <p><b>Message: </b>' . $message . '</p>
    <p><b>Are You Unemployed: </b>' . $AreYouUnemployedValue . '</p>
    <p><b>Are You Registered In Job Centre: </b>' . $AreYouRegisteredInJobCentreValue . '</p>
    <p><b>Are You Registered In Employment Centre: </b>' . $AreYouRegisteredInEmploymentCentreValue . '</p>

    
    <p><b>How I heard: </b>' . $How . '</p>
    <p><b>Accepted privacy policy: </b>' . $Privacy . '</p>';

    // Check whether submitted data is not empty
    // <p><b>Registered with the Jobcenter or Agentur für Arbeit?: </b>' . $Reg . '</p>
    if (!empty($email) && !empty($name) && !empty($Msg2)) {


        $uploadStatus = 1;

        // Upload attachment file
        if (!empty($_FILES["attachment"]["name"])) {

            // File path config
            $targetDir = "uploads/";
            $fileName = basename($_FILES["attachment"]["name"]);
            $targetFilePath = $targetDir . $fileName;
            $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION);

            // Allow certain file formats
            $allowTypes = array('pdf', 'doc', 'docx', 'jpg', 'png', 'jpeg');
            if (in_array($fileType, $allowTypes)) {
                // Upload file to the server
                if (move_uploaded_file($_FILES["attachment"]["tmp_name"], $targetFilePath)) {
                    $uploadedFile = $targetFilePath;
                } else {
                    $uploadStatus = 0;
                }
            } else {
                $uploadStatus = 0;
                header($headerurl . "?fileerror");
            }
        }

        if ($uploadStatus == 1) {

            // Recipient
            $toEmail = 'info@primedtalent.de';
            // $toEmail = 'mohammedismail97420@gmail.com';
            // $toEmail = 'koushik.rohan509@gmail.com';


            // Sender
            $from = $email;
            $fromName = $name;

            // Message 
            $htmlContent = $Msg2;

            // Header for sender info
            $headers = "From: $fromName" . " <" . $from . ">";

            if (!empty($uploadedFile) && file_exists($uploadedFile)) {

                // Boundary 
                $semi_rand = md5(time());
                $mime_boundary = "==Multipart_Boundary_x{$semi_rand}x";

                // Headers for attachment 
                $headers .= "\nMIME-Version: 1.0\n" . "Content-Type: multipart/mixed;\n" . " boundary=\"{$mime_boundary}\"";

                // Multipart boundary 
                $Msg2 = "--{$mime_boundary}\n" . "Content-Type: text/html; charset=\"UTF-8\"\n" .
                    "Content-Transfer-Encoding: 7bit\n\n" . $htmlContent . "\n\n";

                // Preparing attachment
                if (is_file($uploadedFile)) {
                    $Msg2 .= "--{$mime_boundary}\n";
                    $fp =    @fopen($uploadedFile, "rb");
                    $data =  @fread($fp, filesize($uploadedFile));
                    @fclose($fp);
                    $data = chunk_split(base64_encode($data));
                    $Msg2 .= "Content-Type: application/octet-stream; name=\"" . basename($uploadedFile) . "\"\n" .
                        "Content-Description: " . basename($uploadedFile) . "\n" .
                        "Content-Disposition: attachment;\n" . " filename=\"" . basename($uploadedFile) . "\"; size=" . filesize($uploadedFile) . ";\n" .
                        "Content-Transfer-Encoding: base64\n\n" . $data . "\n\n";
                }

                $Msg2 .= "--{$mime_boundary}--";
                $returnpath = "-f" . $email;

                // Send email
                $mail = mail($toEmail, $emailSubject, $Msg2, $headers, $returnpath);

                // Delete attachment file from the server
                @unlink($uploadedFile);
            } else {
                // Set content-type header for sending HTML email
                $headers .= "\r\n" . "MIME-Version: 1.0";
                $headers .= "\r\n" . "Content-type:text/html;charset=UTF-8";

                // Send email
                $mail = mail($toEmail, $emailSubject, $htmlContent, $headers);
            }

            // If mail sent
            if ($mail) {
                global $name;
                global $Email;
                global $Phone;
                global $City;
                global $Date;
                global $Exp;
                global $message;
                global $How;
                global $AreYouUnemployedValue;
                global $AreYouRegisteredInJobCentreValue;
                global $AreYouRegisteredInEmploymentCentreValue;

                date_default_timezone_set('Asia/Kolkata');
                $datetime = date('Y/m/d h:i:s A');
                $current_data = file_get_contents('databases/aws.json');
                $array_data = json_decode($current_data, true);
                $extra = array(
                    'Name' => $name,
                    'Email' => $email,
                    'Phone' => $Phone,
                    'City' => $City,
                    'Date' => $Date,
                    'Experience' => $Exp,
                    'Message' => $message,
                    'How' => $How,
                    'DateTime' => $datetime,
                    'AreYouUnemployedValue' => $AreYouUnemployedValue, 
                    'AreYouRegisteredInJobCentreValue' => $AreYouRegisteredInJobCentreValue,
                    'AreYouRegisteredInEmploymentCentreValue' => $AreYouRegisteredInEmploymentCentreValue
                );
                $array_data[] = $extra;
                $final_data = json_encode($array_data);
                if (file_exists('databases/aws.json')) {
                    if (file_put_contents('databases/aws.json', $final_data)) {
                        header($headerurl . "?success");
                    }
                } else {
                    fopen('databases/aws.json', 'w');
                    if (file_put_contents('databases/aws.json', $final_data)) {
                        header($headerurl . "?success");
                    }
                }
                return false;
                $postData = '';
            } else {
                header($headerurl . "?error");
            }
        }
    }
} else {
    header($headerurl);
}
