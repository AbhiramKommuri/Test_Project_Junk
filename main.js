leftwristX="";
leftwristy="";

rightwristx="";
rightwristy="";

song="";

function preload(){
song = loadSound('music.mp3');
}

function setup(){
canvas = createCanvas(600, 500);
canvas.center();

Webcam = createCapture(VIDEO);
Webcam.hide();
poseNet = ml5.poseNet(Webcam,modelLoaded);

poseNet.on('pose',gotPoses);
}

function gotPoses(results){
if(results.length>0){
console.log(results);
scoreleftw = results[0].pose.kepoints[9].score;
console.log("scoreLeftWrist =" + scoreleftw)

leftwristx = results[0].pose.leftWrist.x;
leftwristy = results[0].pose.leftWrist.y;
console.log("left wrist x" + leftwristx + "left wrist y" + leftwristy);

rightwristx = results[0].pose.rightWrist.x;
rightwristy = results[0].pose.rightWrist.y;
console.log("right wrist x" + rightwristx + "right wrist y" + rightwristy);
}
}

function modelLoaded(){
console.log("modelLoaded");
}

function draw(){
image(Webcam,0,0,600,500);

fill("#0000FF");
stroke("#0000FF");

if(scoreleftw > 0.2){

circle(leftwristx,leftwristy,20);
inNumberleftwristy = Number(leftwristy);
removedec = floor(inNumberleftwristy);
vol = removede/500;
document.getElementById("Volume =" + vol);
song.setVolume(vol);
}
}
function play(){
song.play();

song.setVolume(1);
song.rate(1);

}


