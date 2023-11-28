let x, y
let img1, img2, img3, img4, img5
let centerX = 130
let centerY = 130
let theWidth = 220
let theHeight = 230
let changedWidth = 240
let changedHeight = 250
let isNormalActive = true

function preload() {
    img1 = loadImage("sing1.jpg");
    img2 = loadImage("sing2.jpg");
    img3 = loadImage("sing3.jpg");
    img4 = loadImage("sing4.jpg");
    img5 = loadImage("sing5.jpg");
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
        NormalSing()
    }
    else {
        InnerEmotionSing()
    }

}

function NormalSing() {
    if (frameCount % 150 <= 55) {
        image(img1, centerX, centerY, theWidth, theHeight);
    } else if (frameCount % 150 <= 80) {
        image(img2, centerX, centerY, theWidth, theHeight);
    } else if (frameCount % 150 <= 150) {
        image(img3, centerX, centerY, theWidth, theHeight);
    }
}

function InnerEmotionSing() {
    if (frameCount % 100 < 50) {
        image(img4, centerX, centerY, changedWidth, changedHeight);
    }
    else {
        image(img5, centerX, centerY, changedWidth, changedHeight);
    }
}

function ChangeSing() {
    isNormalActive = !isNormalActive;
}