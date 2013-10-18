<?php

	$emailTo   = $_POST['email'];
	$emailNome = $_POST['nome'];

	include_once 'swift/swift_required.php';


	// $body = format_email($info,'html');
	// $body_plain_txt = format_email($info,'txt');

	$transport = Swift_SmtpTransport::newInstance('smtp.qualittas.com.br', 587);
	$transport ->setUsername('noreply@qualittas.com.br');
	$transport ->setPassword('iq976431iq');

	$mailer = Swift_Mailer::newInstance($transport);
	$message = Swift_Message::newInstance();
	$message ->setSubject('Portal QualiLog');
	$message ->setFrom(array('noreply@qualittas.com.br' => 'Portal QualiLog'));
	$message ->setTo(array($emailTo => $emailNome));
	
	// $message ->setBody($body_plain_txt);
	// $message ->addPart($body, 'text/html');
			
	$message ->setBody('OI');
	$message ->addPart('<h1>OI</h1>', 'text/html');

	$result = $mailer->send($message);

	print_r($result);
	
	return $result;

?>