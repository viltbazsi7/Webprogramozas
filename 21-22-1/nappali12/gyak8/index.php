<?php
/*
Az első és legfontosabb dolog: a <?php és ?> tagek. Ezek közé kerül a PHP kódunk.
Ezeket a tageket bárhová elhelyezhetjük a dokumentumban.
*/

// Változók
// Az alap típusok a következők: szöveg, egész szám, lebegőpontos szám és logikai.
// A változók létrehozásához nem használ kulcsszavakat a PHP, viszont a változók neve elé mindig $ kerül:
$gyumolcs = 'alma';
$ar = 50;
$suly = 0.25;
$finom = true;

// Dolgokat kiírni az "echo" kulcsszóval tudunk:
echo $gyumolcs . '<br>';
if ($finom) {
    echo 'Az alma finom.<br>';
} else {
    echo 'Az alma nem finom.<br>';
}

// Változókat egyik típusból a másikba a megfelelő függvénnyel lehet konvertálni.
// A függvény neve mindig a cél típust tartalmazza.
// intval($var)   -> a $var változó csinál egy egész számot.
// floatval($var) -> a $var változóból csinál egy lebegőpontos számot.
// boolval($var)  -> a $var változóból csinál egy logikai értéket.
// Ezek bemutatását lentebb látható

// A változók típusát az is_int($var), is_float($var), is_bool($var) és is_string($var) fügvénnyekkel lehet ellenőrizni.

// Tömbök
// PHP-ben a tömbök asszociatívak, vagyis rendezett kulcs-érték párokból állnak.
// Hasonlítanak működésükben a Pythonos listákhoz és szótárakhoz,
// vagyis létezik egyszerű 0-tól kezdődő szám indexelésű tömb:
$tomb1 = ['alma', 50, 0.25, true];
for ($i = 0; $i < count($tomb1); $i++) {
    echo $tomb1[$i] . '<br>';
}
// és létezik egyedi kulcsokat használó tömb is:
$tomb2 = [
    'nev' => 'alma',
    'ar' => 50,
    'suly' => 0.25,
    'finom' => true
];
foreach ($tomb2 as $kulcs => $ertek) {
    echo $kulcs . ' => ' . $ertek . '<br>';
}

// Objektumok
// Léteznek a nyelvben objektumok (osztályok) is. Ezekről bővebben máskor lesz szó,
// egyelőre csak bemutatom, hogyan lehet egy tömböt objektummá alakítani (castolás):
$objektum = (object)[
    'nev' => 'alma',
    'ar' => 50,
    'suly' => 0.25,
    'finom' => true
];
// Ilyenkor a nem-numerikus kulcsok az objektum tulajdonságaivá válnak, a tulajdonságokat így kell lekérdezni:
echo $objektum->nev . '<br>';

// Függvények létrehozása:
function fuggveny($a, $b) {
    $a++;
    return $a + $b * 2;
}
echo fuggveny(6, 3) . '<br>';

// A "require" és "include" kulcsszavakkal lehet más PHP fájlok tartalmát bemásolni, hasonlóan a C nyelv header fájljaihoz
// A "require" követelőzik, vagyis hibára fut a kód, ha valamilyen hiba lép fel
// Az "include" esetében csak figyelmeztetés történik
require 'bond.php';
// Header guardok/"pragma once" helyett az include_once és require_once szolgál azért, hogy egy PHP fájl csak egyszer legyen bemásolva.
// Például, ha van egy ilyen fájl rendszer:
/*
common_functions.php

classA.php <- common_functions.php
classB.php <- common_functions.php

script.php <- classA.php, classB.php
*/
// Ebben az esetben a classA.php és classB.php is require-el bemásolná a common_functions.php tartalmát,
// azonban mivel a script.php a classA.php és a classB.php tartalmát is bemásolja, a common_functions.php kétszer lenne jelen,
// ennek elkerülésére a classA.php és classB.php require helyett require_once-t használva ezt elkerülheti.

// A kód a <body>-ban folytatódik a kiírással és egyéb trükkökkel.
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>8. gyakorlat</title>
    <style>
        table, tr, td, th {
            border: 1px solid black;
            border-collapse: collapse;
        }
    </style>
</head>
<body>
    <h1>8. gyakorlat</h1>
    <p><?= 'A "&lt;?=" a rövid echo tag, a "&lt;?php echo" rövidítése.' ?> Ezzel bárhová lehet röviden szöveget illeszteni, például a style tulajdonságba: <span style="color: <?= 'red' ?>">piros szöveg</span>.</p>
    <p>Szintén lehet az if-eket, for-okat, foreach-eket is elhelyezni úgy, hogy közé normál HTML-et írunk. Ez a táblázat így generálódik:</p>
    <table>
        <tr>
            <th>Érték</th>
            <th>intval</th>
            <th>floatval</th>
            <th>boolval</th>
        </tr>
        <?php foreach ([50, 3.6, '-42', '123.456', '123alma456', 'alma123456', 0, 1] as $ertek): ?>
        <tr>
            <td><?= $ertek ?></td>
            <td><?= intval($ertek) ?></td>
            <td><?= floatval($ertek) ?></td>
            <td><?= boolval($ertek) == 1 ? 'true' : 'false' ?></td>
        </tr>
        <?php endforeach ?>
    </table>
    <p>A változókról információt a var_dump és print_r függvényekkel lehet lekérdezni. Ezekhez nem kell echo, a standard kimenetre írnak. A var_dump mindent leír az adott változóról, a print_r kicsit kevesebbet ír le:<p>
    <ul>
        <li>var_dump: <pre><?php var_dump($tomb1) ?></pre></li>
        <li>print_r: <pre><?php print_r($tomb1) ?></pre></li>
    </ul>
    <h2>James Bond</h2>
    <p>Ez egy komplexebb példa.</p>
    <table>
        <tr>
            <th>Színész</th>
            <th>Film</th>
            <th>Év</th>
            <th>Eon Productions?</th>
        </tr>
        <?php foreach ($bondok as $bond): ?>
            <?php for ($i = 0; $i < count($bond['filmek']); $i++): ?>
            <tr>
                <?php if ($i == 0): ?>
                    <td rowspan="<?= count($bond['filmek']) ?>">
                        <?= $bond['szinesz'] . (count($bond['filmek']) >= 5 ? ' ⭐' : '') ?>
                    </td>
                <?php endif ?>
                <td><?= $bond['filmek'][$i]['cim'] ?></td>
                <td><?= $bond['filmek'][$i]['ev'] ?></td>
                <td><?= $bond['filmek'][$i]['eon'] ? 'Igen' : 'Nem' ?></td>
            </tr>
            <?php endfor ?>
        <?php endforeach ?>
    </table>
</body>
</html>