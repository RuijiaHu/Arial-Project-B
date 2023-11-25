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
    img1 = loadImage("js/top-class/king/king1.jpg");
    img2 = loadImage("js/top-class/king/king2.jpg");
    img3 = loadImage("js/top-class/king/king3.jpg");
    img4 = loadImage("js/top-class/king/king4.jpg");
    img5 = loadImage("js/top-class/king/king5.jpg");
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
        NormalKing()
    }
    else {
        InnerEmotionKing()
    }

}

function NormalKing() {
    if (frameCount % 150 <= 35) {
        image(img1, centerX, centerY, theWidth, theHeight);
    } else {
        image(img2, centerX, centerY, theWidth, theHeight);
    }
}

function InnerEmotionKing() {
    if (frameCount % 90 < 30) {
        image(img3, centerX, centerY, changedWidth, changedHeight);
    }
    else if (frameCount % 90 < 60) {
        image(img4, centerX, centerY, changedWidth, changedHeight);
    }
    else if (frameCount % 90 < 90) {
        image(img5, centerX, centerY, changedWidth, changedHeight);
    }
}

function ChangeKing() {
    isNormalActive = !isNormalActive;
}