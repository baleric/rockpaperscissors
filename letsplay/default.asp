<% 
	'if session equals false, redirect'
	if session("letsplaysomeRPS") = false then
		'let user know to login again'
		response.Redirect("/?message=needlogin") 
	end if

%>

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

				<div class="select-move">					
				</div>

				<h2>Welcome <%=session("loggedinusername")%> <span><a href="/validation/?id=logout">(logout)</a></h2>
				
				<p class="grey">
					Please select a move... <span class="game-timer"></span>
				</p>				

				<div class="move-select">
					<div data-move="rock" class="player-move"><img src="/img/rock.png" /></div>
					<div data-move="paper" class="player-move"><img src="/img/paper.png" /></div>
					<div data-move="scissors" class="player-move"><img src="/img/scissors.png" /></div>
				</div>

				<div class="move-select comp-mover">
					<div data-move="rock" class="computer-move"><img src="/img/com-rock.png" /></div>
					<div data-move="paper" class="computer-move"><img src="/img/com-paper.png" /></div>
					<div data-move="scissors" class="computer-move"><img src="/img/com-scissors.png" /></div>
				</div>

				<p class="grey results">Results</p>

				<div class="overflow-table">
					<table class="results-table">

						<tr class="headers">	
							<th></th>
							<th>streak</th>
							<th class="wins">wins</th>
						</tr>
						<tr class="player-table">
							<td class="text-left">Player</td>
							<td class="streak">0</td>
							<td class="count">0</td>
						</tr>
						<tr class="computer-table">
							<td class="text-left">Computer</td>
							<td class="streak">0</td>
							<td class="count">0</td>
						</tr>
					</table>
				</div>

				<div class="winner">
					<span></span>
					<p class="grey">
						Click to restart.
					</p>
				</div>

			</div>
		</div>

		

	</section>

	<script src="/js/libs/require.js" data-main="/js/boot.js"></script>
</body>
</html>