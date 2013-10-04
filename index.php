<?php
    include 'php/conn.php';
?>

<?php
    include 'elements/header.php';
?>

<?php
    $sql = 'SELECT * FROM qlsmspolos ORDER BY nome';
    $rs = mysql_query($sql, $conn);
    while ($row = mysql_fetch_array($rs, MYSQL_ASSOC)) {
        echo "<p>Nome: " . $row["nome"] . "</p>";
    }
    mysql_free_result($rs);
?>

<?php
    include 'elements/footer.php'; 
?>
