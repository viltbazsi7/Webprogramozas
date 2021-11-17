<?php
$hibak = [];
if (count($_POST) > 0) {
    // tanuló nevének ellenőrzése
    if (!isset($_POST['tanulo']) || trim($_POST['tanulo']) == '') {
        $hibak['tanulo'] = 'A tanuló nevének megadása kötelező.';
    } else if (count(explode(' ', $_POST['tanulo'])) == 1) {
        $hibak['tanulo'] = 'A tanuló neve legalább két szóból kell álljon.';
    }

    // eredmény ellenőrzése
    if (!isset($_POST['szazalek']) || trim($_POST['szazalek']) == '') {
        $hibak['szazalek'] = 'Az elért százalékos eredmény megadása kötelező.';
    } else if (!is_numeric($_POST['szazalek']) || intval($_POST['szazalek']) != floatval($_POST['szazalek'])) {
        $hibak['szazalek'] = 'Az elért százalékos eredmény egész szám kell legyen.';
    } else if (intval($_POST['szazalek']) < 0) {
        $hibak['szazalek'] = 'Az elért százalékos eredmény nemnegatív kell legyen.';
    }

    // szóbeli ellenőrzés
    if (!isset($hibak['szazalek']) && !isset($_POST['szobeli'])) {
        if (intval($_POST['szazalek']) >= 12 && intval($_POST['szazalek']) < 25) {
            $hibak['szobeli'] = 'Szóbeli időpont szükséges.';
        }
    }

    // ha kellene menteni (ez már nem a feladat része)
    if (count($hibak) == 0) {
        $tanulo = [
            'nev' => $_POST['tanulo'],
            'szazalek' => intval($_POST['szazalek']),
            'szobeli' => isset($_POST['szobeli'])
        ];
        var_dump($tanulo);
        // kiírás fájlba stb...
    }
}

function allapottartas($azon) {
    if (isset($_POST[$azon])) {
        return $_POST[$azon];
    }
    return '';
}
?>
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>PHP ZH - 2. feladat</title>
</head>
<body>
    <h1>ÉRETTSÉGI VIZSGA MATEMATIKÁBÓL</h1> 
    <h2>2. feladat: űrlapfeldolgozás</h2>
    <form action="2.php" method="POST" novalidate>
        <label for="tanulo">Tanuló neve:</label>
        <input type="text" name="tanulo" id="tanulo" value="<?= allapottartas('tanulo') ?>"> <?= isset($hibak['tanulo']) ? $hibak['tanulo'] : '' ?>
        <br>
        <label for="szazalek">Eredmény (%):</label>
        <input type="text" name="szazalek" id="szazalek" value="<?= allapottartas('szazalek') ?>"> <?= isset($hibak['szazalek']) ? $hibak['szazalek'] : '' ?>
        <br>
        <input type="checkbox" name="szobeli" id="szobeli" <?= allapottartas('szobeli') ? 'checked' : '' ?>>
        <label for="szobeli">Szóbeli időpont szükséges</label> <?= isset($hibak['szobeli']) ? $hibak['szobeli'] : '' ?>
        <br>
        <button type="submit">Küldés</button>
    </form>
</body>
</html>