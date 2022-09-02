noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(500,470);
    canvas.position(650,130);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX = "+noseX+"noseY = "+noseY);
        rightWristX=results[0].pose.rightWrist.x;
        leftWristX=results[0].pose.leftWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("rightWristX = "+rightWristX+"leftWristX = "+leftWristX+"difference = "+difference);

    }
}
function draw(){
    document.getElementById("square_side").innerHTML="Width and Height of square will be"+difference+"px";
    background("#ADD8E6");
    fill("#FFB6C1");
    stroke("#FFB6C1");
    square(noseX,noseY,difference);
}
function modelLoaded(){
    console.log("model is loaded");
}