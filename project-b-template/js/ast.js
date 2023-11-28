let x, y
let img1, img2, img3, img4, img5
let centerX = 120
let centerY = 120
let theWidth = 220
let theHeight = 240
let changedWidth = 240
let changedHeight = 260
let isNormalActive = true

function preload() {
    img1 = loadImage("ast1.jpg");
    img2 = loadImage("ast2.jpg");
    img3 = loadImage("ast3.jpg");
    img4 = loadImage("ast4.jpg");
    img5 = loadImage("ast5.jpg");
}

function setup() {
    createCanvas(300, 300);
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