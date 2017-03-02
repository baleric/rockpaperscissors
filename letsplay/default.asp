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
				<table class="results-table">
					<tr>
						<td class="text-left">Player</td>
					</tr>
					<tr>
						<td class="text-left">Computer</td>
					</tr>
				</table>

			</div>
		</div>
	</section>

	<script src="/js/libs/require.js" data-main="/js/boot.js"></script>
</body>
</html>