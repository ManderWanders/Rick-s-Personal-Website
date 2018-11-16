function randomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

var counter = 0;

while ( counter < 1 ) {
  var randNum = randomNumber(6);
  document.write( 'Ranked # ' + randNum + ' of a lot in Red Dead Redemption 2.' );
  counter += 1;
}
