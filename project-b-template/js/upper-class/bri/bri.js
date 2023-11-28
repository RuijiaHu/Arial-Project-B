let x, y
let img1, img2, img3
let centerX = 85
let centerY = 70
let theWidth = 170
let theHeight = 135
let changedWidth = 180
let changedHeight = 150
let isNormalActive = true

function preload() {
    img1 = loadImage("bri1.jpg");
    img2 = loadImage("bri2.jpg");
    img3 = loadImage("bri3.jpg");
}

function setup() {
    createCanvas(200, 200);
    imageMode(CENTER)
    img1.filter(THRESHOLD);
    img2.filter(THRESHOLD);
}

function draw() {
    background(255);
    if (isNormalActive) {
        NormalBri()
    }
    else {
        InnerEmotionBri()
    }

}

function NormalBri() {
    if (frameCount % 150 <= 35) {
        image(img1, centerX, centerY, theWidth, theHeight);
    } else {
        image(img2, centerX, centerY, theWidth, theHeight);
    }
}

function InnerEmotionBri() {
    image(img3, centerX, centerY, changedWidth, changedHeight);
}

function ChangeBri() {
    isNormalActive = !isNormalActive;
}