function setup() {
    canvas = createCanvas(540, 300);
    canvas.parent("canvas");
    video = createCapture(VIDEO);
    video.size(540, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
}
function draw() {
    image(video, 0, 0);
}
function modelLoaded() {
    console.log("model loaded");
}