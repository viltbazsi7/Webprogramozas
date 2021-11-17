<?php
function fajlnev($nev, $azon) { // Gipss J'kab, JD123456 -> gipss_j'kab _ jd123456 .txt
    return strtolower(str_replace(' ', '_', $nev)) . '_' . strtolower($azon) . '.txt';
}

$hibak = [];
$hiba_azon = false;
if (count($_POST) > 0) {
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
    // adtunk-e meg nevet?
    if (!isset($_POST['name']) || trim($_POST['name']) == '') {
        array_push($hibak, 'Nincs megadva név!');
    }

    // adtunk-e meg azonosítót?
    if (!isset($_POST['id']) || trim($_POST['id']) == '') {
        $hibak[] = 'Nincs megadva azonosító!';
        $hiba_azon = 'Nincs megadva azonosító!';
    } elseif (preg_match('/^[Jj][Dd]\d{6}$/', trim($_POST['id'])) != 1) { // érvényes-e az azonosító?
        $hibak[] = 'Érvénytelen az azonosító!';
        $hiba_azon = 'Érvénytelen az azonosító!';
    }

    // adtunk-e meg bolygót?
    if (!isset($_POST['planet']) || trim($_POST['planet']) == '') {
        $hibak[] = 'Nincs megadva bolygó!';
    } elseif (!in_array($_POST['planet'], $valid_planets)) { // érvényes-e a bolygó?
        $hibak[] = 'Érvénytelen a bolygó!';
    }
    
    // adtunk-e meg rangot?
    if (!isset($_POST['rank']) || trim($_POST['rank']) == '') {
        $hibak[] = 'Nincs megadva rang!';
    } elseif (!in_array($_POST['rank'], $valid_ranks)) { // érvényes-e a rang?
        $hibak[] = 'Érvénytelen a rang!';
    }

    if (count($hibak) == 0) {
        $jedi = [
            'name' => $_POST['name'],
            'id' => $_POST['id'],
            'planet' => $_POST['planet'],
            'rank' => $_POST['rank'],
            'has_padawan' => isset($_POST['haspadawan'])
        ];
        //file_put_contents('jedi.json', json_encode($jedi, JSON_PRETTY_PRINT));
        $jedik = json_decode(file_get_contents('jedik.json'), true);
        $jedik[] = $jedi;
        file_put_contents('jedik.json', json_encode($jedik, JSON_PRETTY_PRINT));
        if (trim($_POST['wish']) != '') {
            file_put_contents(fajlnev($jedi['name'], $jedi['id']), $_POST['wish']);
        }
    }
}

function POST($param) {
    return (isset($_POST[$param]) ? $_POST[$param] : '');
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
<pre><?php var_dump($_POST); ?></pre>
<div class="card">
<div class="card-header">Jedi bejelentőlap</div>
<div class="card-body">
<form method="post">
    <?php foreach ($hibak as $hiba): ?>
        <div class="alert alert-danger"><?php echo $hiba ?></div>
    <?php endforeach ?>
    <div class="mb-3">
        <label for="name" class="form-label">Név</label>
        <input type="text" class="form-control" name="name" id="name" placeholder="Gipss J'kab" value="<?= POST('name') ?>">
    </div>
    <div class="mb-3">
        <label for="id" class="form-label">Azonosító</label>
        <?php if ($hiba_azon): ?>
            <div class="alert alert-danger"><?= $hiba_azon ?></div>
        <?php endif ?>
        <input type="text" class="form-control" name="id" id="id" placeholder="JD123456" value="<?= POST('id') ?>">
    </div>
    <div class="mb-3">
        <label for="planet" class="form-label">Bolygó</label>
        <select class="form-select" name="planet" id="planet">
            <option <?= (isset($_POST['planet']) && $_POST['planet'] == 'Felucia' ? 'selected' : '') ?>>Felucia</option>
            <option <?= (isset($_POST['planet']) && $_POST['planet'] == 'Geonosis' ? 'selected' : '') ?>>Geonosis</option>
            <option <?= (isset($_POST['planet']) && $_POST['planet'] == 'Kamino' ? 'selected' : '') ?>>Kamino</option>
            <option <?= (isset($_POST['planet']) && $_POST['planet'] == 'Kashyyyk' ? 'selected' : '') ?>>Kashyyyk</option>
            <option <?= (isset($_POST['planet']) && $_POST['planet'] == 'Mandalore' ? 'selected' : '') ?>>Mandalore</option>
            <option <?= (isset($_POST['planet']) && $_POST['planet'] == 'Mygeeto' ? 'selected' : '') ?>>Mygeeto</option>
        </select>
    </div>
    <div class="mb-3">
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="rank" value="master" id="master" <?= (isset($_POST['rank']) && $_POST['rank'] == 'master' ? 'checked' : '') ?>>
            <label class="form-check-label" for="master">Jedi mester</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="rank" value="knight" id="knight" <?= (isset($_POST['rank']) && $_POST['rank'] == 'knight' ? 'checked' : '') ?>>
            <label class="form-check-label" for="knight">Jedi lovag</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="rank" value="padawan" id="padawan" <?= (isset($_POST['rank']) && $_POST['rank'] == 'padawan' ? 'checked' : '') ?>>
            <label class="form-check-label" for="padawan">Padawan</label>
        </div>
    </div>
    <div class="mb-3">
        <input class="form-check-input" type="checkbox" name="haspadawan" id="haspadawan" <?= (isset($_POST['haspadawan']) ? 'checked' : '') ?>>
        <label class="form-check-label" for="haspadawan">Van padawanja?</label>
    </div>
    <div class="mb-3">
        <label for="wish" class="form-label">Kívánság</label>
        <textarea class="form-control" name="wish" id="wish" rows="3"><?= POST('wish') ?></textarea>
    </div>
    <input type="submit" class="btn btn-primary" name="submit" value="Küldés">
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