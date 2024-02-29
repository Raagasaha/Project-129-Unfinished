song = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristX = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;
songstatus = "";



function preload() {
    song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    canvas.position(600, 300)

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function play() {
    song.play();
   
}
function draw() {
    image(video, 0, 0, 600, 500);

    songstatus = song.isPlaying();
    
    fill("FF6347");
    stroke("FF0000"); 
    
    
     if(scoreLeftWrist > 0.2) 
    {

    circle(leftWristX, leftWristY, 20);
    song2.stop();
   
    if(songstatus==false)
    {
         song.play();
        document.getElementById("songname").innerHTML="Harry Potter Theme Song";
       
    }
    }

    if(scoreRightWrist > 0.2) 
    {   
        circle(leftWristX, rightWristY, 20);
      song.stop();

    if(songstatus=true)  
    {
        song2.play();
        document.getElementById("songname").innerHTML="Guitar Music";
    }
    }

  
    
}

function modelLoaded() {
    console.log('Posenet is initialized.');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);
        results[0].pose.keypoints[9].score;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}

