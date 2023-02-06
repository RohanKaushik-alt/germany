<?php
if (isset($_POST['btn-send'])) {
    $Name = $_POST['name'];
    $Email = $_POST['email'];
    $Phone = $_POST['phone'];
    $Subject = $_POST['subject'];
    $Msg = $_POST['message'];
    $Url = $_POST['url'];

    if (isset($_POST['privacy'])) {
        $Privacy = "Yes";
    }

    $Msg2 = "Name: " . $Name . "\nMessage: " . $Msg . "\nPhone: " . $Phone;
    if (empty($Name) || empty($Email)  || empty($Msg)) {
        header("location:" . $Url . "?error");
    } else {
        // $to1 = "ms@emenkae.com";
        $to2 = "info@primedtalent.de";
        // $to2 = "koushik.rohan509@gmail.com";
        if (mail($to1, $Subject, $Msg2, $Email) && mail($to2, $Subject, $Msg2, $Email)) {
            header("location:" . $Url . "?success");
            $mail = mail($to1, $Subject, $Msg2, $Email);
        }

        if($mail){
            global $Name;
            global $Email;
            global $Msg;
            global $Phone;
            
            date_default_timezone_set('Asia/Kolkata');
            $datetime = date('Y/m/d h:i:s A');
            $current_data = file_get_contents('databases/cloud_Computing.json');
            $array_data = json_decode($current_data, true);
            $extra = array(
                'Name' => $Name,
                'Email' => $Email,
                'Msg' => $Msg,
                'Phone' => $Phone,
                
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
        }

        
        
    }
} else {
    header("location:" . $Url);
}
