<?php
$jedik = json_decode(file_get_contents('jedik.json'), true);
$bolygok = [];
foreach ($jedik as $jedi) {
    if (!in_array($jedi['planet'], $bolygok)) {
        $bolygok[] = $jedi['planet'];
    }
}
sort($bolygok); // rendezések: https://www.php.net/manual/en/array.sorting.php

function bolygo_szures($jedi) {
    if (isset($_GET['planet']) && $_GET['planet'] != 'none') {
        return $jedi['planet'] == $_GET['planet'];
    }
    return true;
}

if (count($_GET) > 0) {
    if (isset($_GET['planet']) && $_GET['planet'] != 'none') {
        $jedik = array_filter($jedik, 'bolygo_szures');
    }
    if (isset($_GET['rank']) && $_GET['rank'] != 'none') {
        $jedik = array_filter($jedik, function($jedi) {
            //return $jedi['rank'] == $_GET['rank'];
            return in_array($jedi['rank'], $_GET['rank']);
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
<!--pre><?php var_dump($jedik); ?></pre-->
<pre><?php var_dump($_GET); ?></pre>
<form method="get">
<select name="planet">
    <option value="none">Bármelyik bolygó</option>
    <?php foreach ($bolygok as $bolygo): ?>
        <option><?= $bolygo ?></option>
    <?php endforeach ?>
</select>
<!--input type="radio" name="rank" value="master" id="master"><label for="master">Jedi mester</label>
<input type="radio" name="rank" value="knight" id="knight"><label for="knight">Jedi lovag</label>
<input type="radio" name="rank" value="padawan" id="padawan"><label for="padawan">Padawan</label>
<input type="radio" name="rank" value="none" id="none"><label for="none">Bármelyik rang</label-->
<input type="checkbox" name="rank[]" value="master" id="master"><label for="master">Jedi mester</label>
<input type="checkbox" name="rank[]" value="knight" id="knight"><label for="knight">Jedi lovag</label>
<input type="checkbox" name="rank[]" value="padawan" id="padawan"><label for="padawan">Padawan</label>
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