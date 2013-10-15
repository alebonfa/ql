<?php

	$tipo_destinatario = $_GET['tipo_destinatario'];

	print_r($tipo_destinatario);

	include("conn.php");

    $sql = 'SELECT d.* ';
    $sql = $sql . 'FROM qlsmsdestinatarios AS d ';

	switch ($tipo_destinatario) {
		case 1:
		    $sql = $sql . 'INNER JOIN qlsmsalunos AS a ';
			break;
		case 2:
		    $sql = $sql . 'INNER JOIN qlsmspalestrantes AS a ';
			break;
		case 3:
		    $sql = $sql . 'INNER JOIN qlsmscolaboradores AS a ';
			break;
	}

    $sql = $sql . 'ON d.id = a.destinatario_id ';
    $sql = $sql . 'ORDER BY d.nome ';

    $rs = mysql_query($sql, $conn) or die(mysql_error());
    $rows = array('destinatarios' => array());
    while ($row = mysql_fetch_assoc($rs)) {
    	$rows['destinatarios'][] = $row;
    }

	echo json_encode($rows);

?>