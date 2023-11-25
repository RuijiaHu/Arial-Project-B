let x, y
let img1, img2, img3
let centerX = 100
let centerY = 100
let theWidth = 120
let theHeight = 140
let changedWidth = 140
let changedHeight = 160
let isNormalActive = true

function preload() {
    img1 = loadImage("js/middle-class/mom/mom1.jpg");
    img2 = loadImage("js/middle-class/mom/mom2.jpg");
    img3 = loadImage("js/middle-class/mom/mom3.jpg");
}

function setup() {
    createCanvas(640, 425);
    imageMode(CENTER)
    img1.filter(THRESHOLD);
    img2.filter(THRESHOLD);
}

function draw() {
    background(255);
    if (isNormalActive) {
        NormalMom()
    }
    else {
        InnerEmotionMom()
    }

}

function NormalMom() {
    if (frameCount % 150 <= 35) {
        image(img1, centerX, centerY, theWidth, theHeight);
    } else {
        image(img2, centerX, centerY, theWidth, theHeight);
    }
}

function InnerEmotionMom() {
    image(img3, centerX, centerY, changedWidth, changedHeight);
}

function ChangeMom() {
    isNormalActive = !isNormalActive;
}