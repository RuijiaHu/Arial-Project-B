let x, y
let img1, img2, img3, img4, img5
let centerX = 100
let centerY = 100
let theWidth = 120
let theHeight = 140
let changedWidth = 140
let changedHeight = 160
let isNormalActive = true

function preload() {
    img1 = loadImage("js/middle-class/ast/ast1.jpg");
    img2 = loadImage("js/middle-class/ast/ast2.jpg");
    img3 = loadImage("js/middle-class/ast/ast3.jpg");
    img4 = loadImage("js/middle-class/ast/ast4.jpg");
    img5 = loadImage("js/middle-class/ast/ast5.jpg");
}

function setup() {
    createCanvas(640, 425);
    imageMode(CENTER)
    img1.filter(THRESHOLD);
    img2.filter(THRESHOLD);
    img3.filter(THRESHOLD);
}

function draw() {
    background(255);
    if (isNormalActive) {
        NormalAst()
    }
    else {
        InnerEmotionAst()
    }

}

function NormalAst() {
    if (frameCount % 150 <= 35) {
        image(img1, centerX, centerY, theWidth, theHeight);
    } else if (frameCount % 150 <= 80) {
        image(img2, centerX, centerY, theWidth, theHeight);
    } else if (frameCount % 150 <= 150) {
        image(img3, centerX, centerY, theWidth, theHeight);
    }
}

function InnerEmotionAst() {
    if (frameCount % 90 < 45) {
        image(img4, centerX, centerY, changedWidth, changedHeight);
    }
    else {
        image(img5, centerX, centerY, changedWidth, changedHeight);
    }
}

function ChangeAst() {
    isNormalActive = !isNormalActive;
}