<?php
session_start();
//sleep(2);
// ha van jogosultságunk
if (isset($_SESSION['neptun']) && $_SESSION['neptun'] == $_GET['neptun']) {
    $messages = json_decode(file_get_contents('messages.json'), true);
    if (isset($messages[$_GET['neptun']]) && isset($messages[$_GET['neptun']][intval($_GET['id'])])) {
        $messages[$_GET['neptun']][intval($_GET['id'])]['statusz'] = 200;
        echo json_encode($messages[$_GET['neptun']][intval($_GET['id'])]);
    } else {
        echo json_encode(['statusz' => 404, 'uzenet' => 'Not Found']);
    }
} else { // ha nincs
    echo json_encode(['statusz' => 403, 'uzenet' => 'Forbidden']);
}