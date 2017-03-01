<!DOCTYPE html>
<html>
<head>
	<title>Paper Rock Scissors</title>
	<link rel="stylesheet" type="text/css" href="/css/styles.css">
</head>
<body id="body" data-controller="play">

	<header>
		<img src="/img/logo.png" />
		<h1>Super Awesome Rock, Paper, Scissors</h1>
	</header>

	<section>
		<div class="container">
			<div class="widget">
				<h2>Welcome <%=session("loggedinusername")%>,</h2>
				
				<p class="grey">
					Please enter your username and password
				</p>				

			</div>
		</div>
	</section>

	<script src="/js/libs/require.js" data-main="/js/boot.js"></script>
</body>
</html>