# rockpaperscissors

Game can be accessed here : http://prsgame.uiux.com.au

username = username
<br>
password = password

<hr> 

<br><br>
<strong>Quick Description</strong>
<br>
 <ul>
  <li>The javascript files are called dynamically from a data-controller on the body tag for each page (requirejs).</li>
  <li>boot.js has all the config for these JS files and is the only js file reference on each page.
   <ul><li>This allows javascript files to be called and rendered only at time of execution, it also allows javascript to be referenced across multiple files and pages, but only when needed.</li></ul>
   </li>
  <li>Database is attached inside database.7z (MSSQL EXPRESS 2012)</li>

<li>As player takes his turn, an array of previous moves is populated, the computer then chooses a random place in the players array for its next move, this increases the likleyhood of the computer guessing your favourite move.</li>
</ul>
<br>
<hr>
<br>
<strong>ToDo</strong>
  <ul><li>In future will update visuals to match my design here : https://raw.githubusercontent.com/baleric/rockpaperscissors/master/NEW-VISUAL-DESIGN.png</li>
  <li>make a SUPER HARD setting (if the computer loses, before displaying the results, allow the computer to choose a second move that may win the round)</li>
  </ul>

Enjoy !
Baleric
