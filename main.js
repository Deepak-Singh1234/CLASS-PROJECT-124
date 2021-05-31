function setup(){
    canvas = createCanvas(500,400);
    canvas.position(600,200);
    video = createCapture(VIDEO);
    video.size(550,550);
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('Model Is Initialised!');
}   

function gotPoses(error ,results){
    if(error){
    console.error("error");
    }
    if(results.lenght>0){
        console.log(results);

    }
}

