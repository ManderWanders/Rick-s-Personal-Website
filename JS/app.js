function randomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

var counter = 0;

while ( counter < 1 ) {
  var randNum = randomNumber(6);
  document.write( 'Ranked # ' + randNum + ' of a lot in Red Dead Redemption 2.' );
  counter += 1;
}

dvar retText = rankedText[nextVal][0];

nextVal += 1;
writeCookie("ranking", nextVal.toString(), 33);

return retText;
