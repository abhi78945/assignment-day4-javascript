var die = 6;
var dice = 2;
var player1 = 0;
var player2 = 0;

function dice_roll(die, dice) {
var roll = 0;
for (loop=0; loop < dice; loop++) {
roll = roll + Math.round(Math.random() * die) % die + 1;
}
document.form.text.value = roll;
}
player1 = roll;
// End -->


function dice_roll2(die, dice) {
var roll = 0;
for (loop=0; loop < dice; loop++) {
roll = roll + Math.round(Math.random() * die) % die + 1;
}
document.form.text.value = roll;
}
player2 = roll;
// End -->

if( player_1 = player_2 )
alert("DRAW!")

else if( player_1 > player_2)
alert("Player 1 is the winner!")

else if (player_1 < player_2)
alert("Player 2 is the winner!")
