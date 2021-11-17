<?php
$valid_planets = [
    'Felucia',
    'Geonosis',
    'Kamino',
    'Kashyyyk',
    'Mandalore',
    'Mygeeto'
];

$valid_ranks = [
    'master',
    'knight',
    'padawan'
];

function fajlnev($nev) {
    return strtolower(str_replace(' ', '_', $nev)) . '.txt';
}

$hibak = [];
$hiba_nev = '';
$hiba_azon = '';
if (count($_POST) > 0) {
    //var_dump($_POST);
    if (!isset($_POST['name']) || trim($_POST['name']) == "") {
        //array_push($hibak, 'Nincs megadva név!');
        $hiba_nev = 'Nincs megadva név!';
    }
    if (!isset($_POST['id']) || trim($_POST['id']) == "") {
        //$hibak[] = 'Nincs megadva azonosító!';
        $hiba_azon = 'Nincs megadva azonosító!';
    } elseif (preg_match('/JD\d{6}/', $_POST['id']) != 1) {
        //$hibak[] = 'Megadott azonosító érvénytelen!';
        $hiba_azon = 'Megadott azonosító érvénytelen!';
    }
    if (!isset($_POST['planet']) || !in_array($_POST['planet'], $valid_planets)) {
        $hibak[] = 'A bolygó érvénytelen.';
    }
    if (!isset($_POST['rank']) || !in_array($_POST['rank'], $valid_ranks)) {
        $hibak[] = 'A rang érvénytelen.';
    }
    //var_dump($hibak);
    
    if (count($hibak) == 0) {
        $jedi = [
            'name' => $_POST['name'],
            'id' => $_POST['id'],
            'matekeredmeny' => 6 + 9,
            'planet' => $_POST['planet'],
            'has_padawan' => (isset($_POST['haspadawan']) ? true : false),
            'rank' => $_POST['rank'],
        ];
        //var_dump($jedi);
        $jedik = json_decode(file_get_contents('jedik.json'), true);
        $jedik[] = $jedi;
        file_put_contents('jedik.json', json_encode($jedik, JSON_PRETTY_PRINT));
        // Gipss J'kab -> gipss_j'kab.txt;
        if (trim($_POST['wish']) != '')
            file_put_contents(fajlnev($_POST['name']), $_POST['wish']);
        //file_put_contents('jedi.json', json_encode($jedi, JSON_PRETTY_PRINT));
    }
}

function allapottart($azon) {
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
    <title>Jedi bejelentőlap</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
<nav class="navbar navbar-light bg-light mb-3">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">HoloNet</a>
    </div>
</nav>
<div class="container mb-3">
    <div class="card">
        <div class="card-header">Jedi bejelentőlap</div>
        <div class="card-body">
            <form method="post">
                <?php if (count($_POST) > 0): ?>
                    <?php foreach ($hibak as $hiba): ?>
                        <p style="color: red"><?= $hiba ?></p>
                    <?php endforeach ?>
                    <?php if (count($hibak) == 0): ?>
                        <p style="color: green">Juppi, nincsenek hibák!</p>
                    <?php endif ?>
                <?php endif ?>
                <hr>
                <div class="mb-3">
                    <?php if ($hiba_nev): ?><p style="color: red"><?= $hiba_nev ?></p><?php endif ?>
                    <label for="name" class="form-label">Név</label>
                    <input type="text" class="form-control" name="name" id="name" placeholder="Gipss J'kab" value="<?= allapottart('name') ?>">
                </div>
                <div class="mb-3">
                <?php if ($hiba_azon): ?><p style="color: red"><?= $hiba_azon ?></p><?php endif ?>
                    <label for="id" class="form-label">Azonosító</label>
                    <input type="text" class="form-control" name="id" id="id" placeholder="JD123456" value="<?= allapottart('id') ?>">
                </div>
                <div class="mb-3">
                    <label for="planet" class="form-label">Bolygó</label>
                    <select class="form-select" name="planet" id="planet">
                        <option>Felucia</option>
                        <option>Geonosis</option>
                        <option>Kamino</option>
                        <option>Kashyyyk</option>
                        <option>Mandalore</option>
                        <option>Mygeeto</option>
                    </select>
                </div>
                <div class="mb-3">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="rank" value="master" id="master" <?= allapottart('rank') == 'master' ? 'checked' : '' ?>>
                        <label class="form-check-label" for="master">Jedi mester</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="rank" value="knight" id="knight" <?= allapottart('rank') == 'knight' ? 'checked' : '' ?>>
                        <label class="form-check-label" for="knight">Jedi lovag</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="rank" value="padawan" id="padawan" <?= allapottart('rank') == 'padawan' ? 'checked' : '' ?>>
                        <label class="form-check-label" for="padawan">Padawan</label>
                    </div>
                </div>
                <div class="mb-3">
                    <input class="form-check-input" type="checkbox" name="haspadawan" id="haspadawan" <?= allapottart('haspadawan') ? 'checked' : '' ?>>
                    <label class="form-check-label" for="haspadawan">Van padawanja?</label>
                </div>
                <div class="mb-3">
                    <label for="wish" class="form-label">Kívánság</label>
                    <textarea class="form-control" name="wish" id="wish" rows="3"><?= allapottart('wish') ?></textarea>
                </div>
                <input type="submit" class="btn btn-primary" value="Küldés">
            </form>
        </div>
    </div>
</div>
<footer class="container-fluid">
<hr>
<p>Copyright &copy; 19 YE Galaktikus Köztársaság <small>(szerk.: mi az a Yavin előtt?)</small></p>
</footer>
</body>
</html>