function setup() {

  createCanvas(480,480);
}
  
function draw() {

  background("white");

  strokeWeight(4);

  var seg = second();
  var min = minute();
  var hrs = hour();

  var mer = hrs < 12 ? "AM":"PM";

  seg = formatting(seg);
  min = formatting(min);
  hrs = formatting(hrs % 12);

  fill(120);

  textSize(48);

  textAlign(CENTER, CENTER);

  text(hrs + ":" + min + ":" + seg +
       " " + mer, width/2, height/2);
}

function formatting(num){

  if(int(num) < 10) {

    return "0" + num;
  }

  return num;
}