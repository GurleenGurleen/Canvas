
var points;

function setup() {
    createCanvas(1200, 800);
    strokeWeight(6);
    noFill();

    points = [];
}


function draw() {

    background(255);

    beginShape();
    for (var i in points) {

        var one_point = points[i];
        curveVertex(one_point.x, one_point.y);
    }
    endShape();
}


function mouseDragged() {

    var one_point = {};
    one_point.x = mouseX;
    one_point.y = mouseY;
    points.push(one_point);
}

