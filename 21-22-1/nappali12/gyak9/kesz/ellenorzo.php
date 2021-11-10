<pre>
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
if (count($_POST) > 0) {
    var_dump($_POST);
    $hibak = [];
    if (!isset($_POST['name']) || trim($_POST['name']) == "") {
        array_push($hibak, 'Nincs megadva név!');
    }
    if (!isset($_POST['id']) || trim($_POST['id']) == "") {
        $hibak[] = 'Nincs megadva azonosító!';
    } elseif (preg_match('/JD\d{6}/', $_POST['id']) != 1) {
        $hibak[] = 'Megadott azonosító érvénytelen!';
    }
    if (!isset($_POST['planet']) || !in_array($_POST['planet'], $valid_planets)) {
        $hibak[] = 'A bolygó érvénytelen.';
    }
    if (!isset($_POST['rank']) || !in_array($_POST['rank'], $valid_ranks)) {
        $hibak[] = 'A rang érvénytelen.';
    }
    var_dump($hibak);
} else {
    die('Nincsen $_POST paraméter');
}
?>
</pre>