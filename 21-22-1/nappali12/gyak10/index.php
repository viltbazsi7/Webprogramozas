<?php
$valid_planets = [
    'Felucia',
    'Geonosis',
    'Kamino',
    'Kashyyyk',
    'Mandalore',
    'Mygeeto'
];

function rank_filter($jedi) {
    return isset($_GET['rank']) && $jedi['rank'] == $_GET['rank'];
}

function allapottart($azon) {
    if (isset($_GET[$azon])) {
        return $_GET[$azon];
    }
    return '';
}

$jedik = json_decode(file_get_contents('jedik.json'), true);
//$szurt = $jedik;
if (count($_GET) > 0) {
    //var_dump($_GET);
    /*$szurt = [];
    foreach ($jedik as $jedi) {
        if (isset($_GET['rank'])) {
            if ($jedi['rank'] == $_GET['rank']) {
                $szurt[] = $jedi;
                //array_push($szurt, $jedi);
            }
        }
    }*/
    //$szurt = array_filter($jedik, 'rank_filter');
    if (isset($_GET['rank']) && $_GET['rank'] != 'none') {
        $jedik = array_filter($jedik, function ($jedi) {
            return $jedi['rank'] == $_GET['rank'];
        });
    }
    if (isset($_GET['planet']) && $_GET['planet'] != 'none') {
        $jedik = array_filter($jedik, function ($jedi) {
            return $jedi['planet'] == $_GET['planet'];
        });
    }
}
?>
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>10. gyak</title>
</head>
<body>
<form>
<select name="planet">
<option value="none" <?= allapottart('planet') == 'none' ? 'selected' : '' ?>>Bármelyik bolygó</option>
<?php foreach ($valid_planets as $planet): ?>
    <option value="<?= $planet ?>" <?= allapottart('planet') == $planet ? 'selected' : '' ?>><?= $planet ?></option>
<?php endforeach ?>
</select>
<input type="radio" name="rank" id="master" value="master" <?= allapottart('rank') == 'master' ? 'checked' : '' ?>><label for="master">Jedi mester</label>
<input type="radio" name="rank" id="knight" value="knight" <?= allapottart('rank') == 'master' ? 'checked' : '' ?>><label for="knight">Jedi lovag</label>
<input type="radio" name="rank" id="padawan" value="padawan" <?= allapottart('rank') == 'master' ? 'checked' : '' ?>><label for="padawan">Padawan</label>
<input type="radio" name="rank" id="none" value="none"  <?= allapottart('rank') == 'none' ? 'checked' : '' ?>><label for="none">Bármelyik rang</label>
<input type="submit" value="Szűrés">
</form>
    <table>
        <tr>
            <th>Név</th>
            <th>Azonosító</th>
            <th>Bolygó</th>
            <th>Rang</th>
            <th>Van padawanja</th>
        </tr>
        <?php foreach ($jedik as $jedi): ?>
        <tr>
            <td><?= $jedi['name'] ?></td>
            <td><?= $jedi['id'] ?></td>
            <td><?= $jedi['planet'] ?></td>
            <td><?= $jedi['rank'] ?></td>
            <td><?= $jedi['has_padawan'] ? 'van' : 'nincs' ?></td>
        </tr>
        <?php endforeach ?>
    </table>
</body>
</html>