<?php
session_start();
if (!isset($_SESSION['neptun'])) {
    header('Location: index.php');
}

if (count($_POST) > 0) {
    if (isset($_POST['cimzett']) && isset($_POST['targy'])) {
        $messages = json_decode(file_get_contents('messages.json'), true);
        $mail = [
            'targy' => $_POST['targy'],
            'felado' => $_SESSION['neptun'],
            'datum' => date('Y-m-d H:i'),
            'szoveg' => $_POST['szoveg']
        ];
        if (!isset($messages[$_POST['cimzett']])) {
            $messages[$_POST['cimzett']] = [];
        }
        array_unshift($messages[$_POST['cimzett']], $mail);
        file_put_contents('messages.json', json_encode($messages, JSON_PRETTY_PRINT));
        header('Location: index.php');
    }
}
?>
<form method="post">
    <label>Címzett: <input type="text" name="cimzett"></label><br>
    <label>Tárgy: <input type="text" name="targy"></label><br>
    <label>Üzenet: <textarea name="szoveg"></textarea></label><br>
    <input type="submit" value="Küldés">
</form>