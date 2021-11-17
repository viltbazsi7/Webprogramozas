<?php
$vizsgazok = json_decode(file_get_contents('vizsgazok.json'), true);
if (isset($_GET['neptun']) && isset($vizsgazok[$_GET['neptun']])) {
    $vizsgazok[$_GET['neptun']] = true;
    file_put_contents('vizsgazok.json', json_encode($vizsgazok, JSON_PRETTY_PRINT));
}
$kitoltott = 0;
?>
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>PHP ZH - 3. feladat</title>
</head>
<body>
    <h1>ÉRETTSÉGI VIZSGA MATEMATIKÁBÓL</h1>
    <h2>3. feladat: adattárolás</h2>
    <h3>Könyvelt törzslapok</h3>
    <?php foreach ($vizsgazok as $kulcs => $vizsgazo): ?>
        <?php if ($vizsgazo): ?>
            <?= $kulcs ?><br>
        <?php $kitoltott++; endif ?>
    <?php endforeach ?>

    <h3>Hiányos törzslapok</h3>
    <?php foreach ($vizsgazok as $kulcs => $vizsgazo): ?>
        <?php if (!$vizsgazo): ?>
            <a href="3.php?neptun=<?= $kulcs ?>"><?= $kulcs ?></a><br>
        <?php endif ?>
    <?php endforeach ?>
    
</body>
</html>
<?php
file_put_contents('statisztika.txt', $kitoltott / count($vizsgazok) * 100 . '%');
?>