<?php
session_start();
unset($_SESSION['neptun']);
//session_destroy();
header('Location: index.php');