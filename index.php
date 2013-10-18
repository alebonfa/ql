<?php
    include 'php/conn.php';
?>

<?php
    include 'elements/header.php';
?>

<div class="container-fluid-main">
	<div id="myCarousel" class="carousel slide">
		<ol class="carousel-indicators">
			<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
			<li data-target="#myCarousel" data-slide-to="1"></li>
			<li data-target="#myCarousel" data-slide-to="2"></li>
		</ol>
		<div class="carousel-inner">
			<div class="item active">
              <img src="images/capa01.png" width="100%">
				<div class="carousel-caption">
					<h4>Portal dos Embaixadores</h4>
					<p>Relacionamento direto com as Universidades</p>
				</div>
			</div>
			<div class="item">
              <img src="images/capa02.png" width="100%">
				<div class="carousel-caption">
					<h4>SMSr</h4>
					<p>Comunicação ágil entre os Envolvidos</p>
				</div>
			</div>
			<div class="item">
				<img src="images/capa03.png" width="100%">
				<div class="carousel-caption">
					<h4>Logistic Center</h4>
					<p>Centralização dos Processos Administrativos</p>
				</div>
			</div>
		</div>
		<a class="left carousel-control" href="#myCarousel" data-slide="prev">‹</a>
		<a class="right carousel-control" href="#myCarousel" data-slide="next">›</a>
	</div>
</div>


<?php
    include 'elements/footer.php'; 
?>
