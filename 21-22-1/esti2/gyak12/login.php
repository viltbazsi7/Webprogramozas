<?php
session_start(); // munkamenet indítása

// ha már be van lépve a felhasználó, irányítódjon a főoldalra
if (isset($_SESSION['neptun'])) {
    header('Location: index.php');
}

// standard bemenet kezelés
$hiba = '';
if (count($_POST) > 0) {
    if (isset($_POST['neptun']) && isset($_POST['jelszo'])) {
        if (strtolower($_POST['neptun']) == $_POST['jelszo']) { // sikeres bejelentkezés
            $_SESSION['neptun'] = strtoupper($_POST['neptun']); // eltároljuk a felhasználó azonosítóját a "neptun" kulcsba
            header('Location: index.php'); // a főoldalra irányítunk
        } else {
            $hiba = "Hibás jelszó!";
        }
    } else {
        $hiba = "Nem adott meg Neptun-kódot vagy jelszót!";
    }
}
?>
<form method="post">
<?php if ($hiba): ?>
<p style="color: red"><?= $hiba ?></p>
<?php endif ?>
<label>Neptun-kód: <input type="text" name="neptun"></label><br>
<label>Jelszó: <input type="password" name="jelszo"></label><br>
<input type="submit" value="Bejelentkezés">
</form>