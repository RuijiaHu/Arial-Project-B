let x, y
let img1, img2, img3, img4, img5
let centerX = 135
let centerY = 135
let theWidth = 220
let theHeight = 230
let changedWidth = 240
let changedHeight = 250
let isNormalActive = true

function preload() {
    img1 = loadImage("tea1.jpg");
    img2 = loadImage("tea2.jpg");
    img3 = loadImage("tea3.jpg");
    img4 = loadImage("tea4.jpg");
    img5 = loadImage("tea5.jpg");
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
        NormalTea()
    }
    else {
        InnerEmotionTea()
    }

}

function NormalTea() {
    if (frameCount % 150 <= 35) {
        image(img1, centerX, centerY, theWidth, theHeight);
    } else if (frameCount % 150 <= 80) {
        image(img2, centerX, centerY, theWidth, theHeight);
    } else if (frameCount % 150 <= 150) {
        image(img3, centerX, centerY, theWidth, theHeight);
    }
}

function InnerEmotionTea() {
    if (frameCount % 100 < 60) {
        image(img4, centerX, centerY, changedWidth, changedHeight);
    }
    else {
        image(img5, centerX, centerY, changedWidth, changedHeight);
    }
}

function ChangeTea() {
    isNormalActive = !isNormalActive;
}