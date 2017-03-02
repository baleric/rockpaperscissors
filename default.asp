<!DOCTYPE html>
<html>
<head>
	<title>Paper Rock Scissors</title>
	<link rel="stylesheet" type="text/css" href="/css/styles.css">
</head>
<body id="body" data-controller="login">

	<header>
		<img src="/img/logo.png" />
		<h1>Super Awesome Rock, Paper, Scissors</h1>
	</header>

	<section>
		<form action="/validation/" method="post">
			<div class="container">
				<div class="widget">
					<h2>Login to play</h2>
					
					<div class="message">
						
						<%if request.querystring("message") = "logout" then%>
							<div class="success">You have been logged out.</div>
						<%end if%>

						<%if request.querystring("message") = "novalue" then%>
							<div class="error">You need to type a username and password.</div>
						<%end if%>

						<%if request.querystring("message") = "incorrectDetails" then%>
							<div class="error"><strong>You have entered incorrect details... </strong>
								<br>
								<span class="grey">protip : labels = values.</span>
							</div>
						<%end if%>

					</div>

					<p class="grey">
						Please enter your details below.
					</p>

					<div class="input-container">
						<label for="username">username</label>
						<input type="text" name="username" id="username" placeholder="enter your username" />
					</div>
					<div class="input-container">
						<label for="password">password</label>
						<input type="password" name="password" id="password" placeholder="enter your password" />
					</div>

					<a href="#" class="forgot">Forgot Password</a>
					<button class="login-btn">Login</button>

				</div>
			</div>
		</form>
	</section>

	<script src="/js/libs/require.js" data-main="/js/boot.js"></script>
</body>
</html>