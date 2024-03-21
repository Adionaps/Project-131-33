img=""
Objects=[]
status1=""

function preload(){
img= loadImage('Dog_Cat image.jpeg')
}

function draw(){
image(img,0,0,640,420)
if(status1 != ""){
    for(i=0;i<Objects.length;i++){
        document.getElementById("status").innerHTML="status:objectDetected"
        percent=floor(Objects[i].confidence*100)
        fill("#FF0000")
        text(Objects[i].label+" "+percent+"%",Objects[i].x+40,Objects[i].y+20)
        noFill()
        stroke("#FF0000")
        rect(Objects[i].x,Objects[i].y,Objects[i].width,Objects[i].height)

    }
   
}
}

function setup(){
canvas= createCanvas(640,420)
canvas.center()
objectDetector=ml5.objectDetector('cocossd',modelLoaded)
document.getElementById("status").innerHTML="status:detecting objects"
}

function modelLoaded(){
    console.log("modelLoaded")
    status1=true
    objectDetector.detect(img,gotResult)
}

function gotResult(error,results){
    if(error){
        console.log(error)
    }
    console.log(results)
    Objects=results
}

