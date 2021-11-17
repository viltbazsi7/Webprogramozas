<?php
$students = [
    ['name' => 'Student1', 'age' => 20],
    ['name' => 'Student2', 'age' => 10],
    ['name' => 'Student3', 'age' => 30],
    ['name' => 'Student4', 'age' => 20],
    ['name' => 'Student5', 'age' => 10],
];

if (isset($_GET['age']) && trim($_GET['age']) != '' && is_numeric($_GET['age'])) {
    $students = array_filter($students, function($student) {
        return $student['age'] == intval($_GET['age']);
    });
}
?>
<ul>
    <?php foreach ($students as $student): ?>
        <li><?= $student['name'] ?> (<?= $student['age'] ?>)</li>
    <?php endforeach ?>
</ul>