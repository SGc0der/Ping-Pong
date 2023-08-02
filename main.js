rWristX = 0;
rWristY = 0;
rWristScore = 0;
function setup() {
    canvas = createCanvas(800, 600);
    canvas.parent("canvas");
    video = createCapture(VIDEO);
    video.size(800, 600);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw() {
    image(video, 0, 0, 800, 600);
    if(rWristScore >= 0.2){
        fill("red");
        stroke("red");
        circle(rWristX, rWristY, 50);
    }
}
function modelLoaded() {
    console.log("model loaded");
}
function gotPoses(results) {
    if(results.length > 0) {
        rWristX = results[0].pose.rightWrist.x;
        rWristY = results[0].pose.rightWrist.y;
        rWristScore = results[0].pose.keypoints[10].score;
        console.log(results);
    } 
}