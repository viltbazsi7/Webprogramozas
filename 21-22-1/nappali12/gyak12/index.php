<?php
session_start();
if (isset($_SESSION['neptun'])) {
    $messages = json_decode(file_get_contents('messages.json'), true);
    $inbox = [];
    if (isset($messages[$_SESSION['neptun']])) {
        $inbox = $messages[$_SESSION['neptun']];
    } else {
        $welcome = [
            'targy' => 'Üdvözli a NeptunMail!',
            'felado' => 'NOREPLY',
            'datum' => date('Y-m-d H:i'),
            'szoveg' => 'Üdvözli önt a NeptunMail rendszere! Üdvözlettel, NeptunMail adminisztrátor'
        ];
        $inbox = [$welcome];
        $messages[$_SESSION['neptun']] = $inbox;
        file_put_contents('messages.json', json_encode($messages, JSON_PRETTY_PRINT));
    }
}
?>
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NeptunMail</title>
    <link href="style.css" rel="stylesheet">
</head>
<body>
    <nav>
        <h1 class="logo">NeptunMail</h1>
        <?php if (!isset($_SESSION['neptun'])): ?>
        <a href="login.php">Bejelentkezés</a>
        <?php else: ?>
        <a href="logout.php">Kijelentkezés</a> <a href="new_message.php">Új üzenet</a> <small>Bejelentkezve: <?= $_SESSION['neptun'] ?></small> 
        <?php endif ?>
    </nav>
    <div>
        <?php if (!isset($_SESSION['neptun'])): ?>
        <p>A levelezés megtekintéséhez jelentkezzen be!</p>
        <?php else: ?>
        <h2>Beérkezett üzenetek:</h2>
        <table class="inbox">
            <tr>
                <th>Tárgy</th>
                <th>Feladó</th>
                <th>Dátum</th>
            </tr>
            <?php if (count($inbox) > 0): ?>
                <?php foreach ($inbox as $id => $mail): ?>
                    <tr>
                        <td><a href="#" data-id="<?= $id ?>" data-neptun="<?= $_SESSION['neptun'] ?>"><?= $mail['targy'] ?></a></td>
                        <td><?= $mail['felado'] ?></td>
                        <td><?= $mail['datum'] ?></td>
                    </tr>
                <?php endforeach ?>
            <?php else: ?>
                <tr><td colspan="3">Nem érkezett üzenete.</td></tr>
            <?php endif ?>
        </table>
        <div class="loading" hidden>Kis türelmet...</div>
        <div class="error" hidden>Kis türelmet...</div>
        <div class="mail" hidden>
            <p><b>Feladó:</b> <span class="felado"></span></p>
            <p><b>Tárgy:</b> <span class="targy"></span></p>
            <p><b>Dátum:</b> <span class="datum"></span></p>
            <p><b>Szöveg:</b> <textarea readonly class="szoveg"></textarea></p>
        </div>
        <?php endif ?>
    </div>
    <script src="ajax.js"></script>
</body>
</html>