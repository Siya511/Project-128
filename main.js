first_music = "";
second_music = "";

leftWrist_x = "";
leftWrist_y = "";

rightWrist_x = "";
rightWrist_y = "";

function preload(){
    first_music = loadSound("music.mp3");
    second_music = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function gotposes(result){
    if (result.length > 0){
        console.log(result)

        leftWrist_x = result[0].pose.leftWrist.x;
        leftWrist_y = result[0].pose.leftWrist.y;
        console.log("leftWrist x = "+leftWrist_x+" leftWrist y = "+leftWrist_y);

        rightWrist_x = result[0].pose.rightWrist.x;
        rightWrist_y = result[0].pose.rightWrist.y;
        console.log("rightWrist x = "+rightWrist_x+" rightWrist y = "+rightWrist_y);

    }
}

function draw(){
    image(video, 0, 0, 600, 500);
}