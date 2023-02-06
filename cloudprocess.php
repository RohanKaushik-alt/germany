<?php
$postData = $uploadedFile = $statusMsg = '';
if (isset($_POST['btn-send'])) {
    $postData = $_POST;
   
    $Name = $_POST['name'];
    $EmailSubject = $_POST['mailsubject'];
    $Email = $_POST['email'];
    $Phone = $_POST['phone'];
    $Location = $_POST['location'];
    $SelectCourse = $_POST['selectCourse'];
    // $Reg = $_POST['registered'];
    // $RegLoc = $_POST['regYes'];
    $subject = "Cloud Computing";
    $Message = $_POST['message'];
    $headerurl = "location:cloud-computing-program";

    


    if (isset($_POST['privacy'])) {
        $Privacy = "Yes";
    }

   


    $Msg2 = "Name: " . $Name . "\nEmail: " . $Email . "\nPhone: " . $Phone . "\nLocation: " . $Location . "\nSelectCourse: " . $SelectCourse . "\nMessage: " . $Message;;

    
    



    if (!empty($Email) && !empty($Name) && !empty($Msg2)) {


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
            $from = $Email;
            $fromName = $Name;

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
                $returnpath = "-f" . $Email;

                // Send email
                $mail = mail($toEmail, $subject , $Msg2,);

                // Delete attachment file from the server
                @unlink($uploadedFile);
            } else {
                // Set content-type header for sending HTML email
                $headers .= "\r\n" . "MIME-Version: 1.0";
                $headers .= "\r\n" . "Content-type:text/html;charset=UTF-8";

                // Send email
                $mail = mail($toEmail, $subject, $Msg2 );
            }

            // If mail sent
            if ($mail) {
                global $Name;
                global $Email;
                global $Phone;
                global $Location;
                global $SelectCourse;
                global $Message;
                

                date_default_timezone_set('Asia/Kolkata');
                $datetime = date('Y/m/d h:i:s A');
                $current_data = file_get_contents('databases/cloud_Computing.json');
                $array_data = json_decode($current_data, true);
                $extra = array(
                    'Name' => $Name,
                    'Email' => $Email,
                    'Phone' => $Phone,
                    'Location' => $Location,
                    'SelectCourse' => $SelectCourse,
                    'Message' => $Message,
                    
                );
                $array_data[] = $extra;
                $final_data = json_encode($array_data);
                if (file_exists('databases/cloud_Computing.json')) {
                    if (file_put_contents('databases/cloud_Computing.json', $final_data)) {
                        header($headerurl . "?success");
                    }
                } else {
                    fopen('databases/cloud_Computing.json', 'w');
                    if (file_put_contents('databases/cloud_Computing.json', $final_data)) {
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
