<?php

	include("conn.php");

    $sql = 'SELECT * FROM localidades ORDER BY localidade_nome';
    $rs = mysql_query($sql, $conn) or die(mysql_error());
    $rows = array('cidades' => array());
    while ($row = mysql_fetch_assoc($rs)) {
    	$rows['cidades'][] = $row;
    }

	echo json_encode($rows);

?>