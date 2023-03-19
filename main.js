Xnose = 0;
Ynose = 0;
difference = 0;
lwristx = 0;
rwristx = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}
function modelLoaded() {
    console.log("ModelLoaded");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        Xnose = results[0].pose.nose.x;
        Ynose = results[0].pose.nose.y;
        console.log("NoseX = " + Xnose + " NoseY = " + Ynose );
        lwristx = results[0].pose.leftWrist.x;
        rwristx = results[0].pose.rightWrist.x;
        difference = floor(lwristx - rwristx);
        console.log("left wrist = " + lwristx + " right wrist = " + rwristx + " difference = " + difference);
    }
}
function draw(){
    background("#D3D3D3");
    document.getElementById('sqaure_side').innerHTML = "Width and height of the sqaure will be " + difference + " px";
    fill('#FF0000');
    stroke("#FFA500");
    square(Xnose,Ynose,difference);
}