<?php

	include("conn.php");

    $sql = 'SELECT * FROM qlsmsdestinatarios ORDER BY nome';
    $rs = mysql_query($sql, $conn) or die(mysql_error());
    $rows = array('destinatarios' => array());
    while ($row = mysql_fetch_assoc($rs)) {
    	$rows['destinatarios'][] = $row;
    }

	echo json_encode($rows);

?>