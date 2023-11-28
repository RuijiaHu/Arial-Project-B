let x, y
let img1, img2, img3, img4, img5
let centerX = 80
let centerY = 80
let theWidth = 120
let theHeight = 140
let changedWidth = 140
let changedHeight = 160
let isNormalActive = true

function preload() {
    img1 = loadImage("fu1.jpg");
    img2 = loadImage("fu2.jpg");
    img3 = loadImage("fu3.jpg");
    img4 = loadImage("fu4.jpg");
    img5 = loadImage("fu5.jpg");
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
        NormalFu()
    }
    else {
        InnerEmotionFu()
    }

}

function NormalFu() {
    if (frameCount % 100 <= 35) {
        image(img1, centerX, centerY, theWidth, theHeight);
    } else {
        image(img2, centerX, centerY, theWidth, theHeight);
    }
}

function InnerEmotionFu() {
    if (frameCount % 130 < 50) {
        image(img3, centerX, centerY, changedWidth, changedHeight);
    }
    else if (frameCount % 130 < 110) {
        image(img4, centerX, centerY, changedWidth, changedHeight);
    }
    else if (frameCount % 130 < 130) {
        image(img5, centerX, centerY, changedWidth, changedHeight);
    }
}

function ChangeFu() {
    isNormalActive = !isNormalActive;
}