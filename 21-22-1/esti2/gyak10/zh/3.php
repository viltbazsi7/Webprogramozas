<?php
$hibak = [];
if (count($_POST) > 0) {
    if (!isset($_POST['name']) || trim($_POST['name']) == '') {
        $hibak['name'] = 'A név megadása kötelező.';
    }
    if (!isset($_POST['age']) || trim($_POST['age']) == '') {
        $hibak['age'] = 'A kor megadása kötelező.';
    } else if (!is_numeric($_POST['age'])) {
        $hibak['age'] = 'A kornak számnak kell lennie.';
    }

    if (count($hibak) == 0) {
        $diakok = file_exists('diakok.json') ? json_decode(file_get_contents('diakok.json'), true) : [];
        $diak = [
            'name' => $_POST['name'],
            'age' => floatval($_POST['age'])
        ];
        $diakok[] = $diak;
        /*$diakok[] = [
            'name' => $_POST['name'],
            'age' => floatval($_POST['age'])
        ];*/
        file_put_contents('diakok.json', json_encode($diakok, JSON_PRETTY_PRINT));
    }
    
}
?>
<h1>Diák mentése</h1>
<form action="" method="post">
Név: <input type="text" name="name" /> <?= isset($hibak['name']) ? $hibak['name'] : '' ?><br>
Kor: <input type="text" name="age" /> <?= isset($hibak['age']) ? $hibak['age'] : '' ?><br>
<button type="submit">Diák mentése</button>
</form>