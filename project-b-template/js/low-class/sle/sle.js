let x, y
let img1, img2, img3, img4
let centerX = 300
let centerY = 150
let theWidth = 420
let theHeight = 240
let changedWidth = 460
let changedHeight = 260
let isNormalActive = true

function preload() {
    img1 = loadImage("sle1.jpg");
    img2 = loadImage("sle2.jpg");
    img3 = loadImage("sle3.jpg");
    img4 = loadImage("sle4.jpg");
}

function setup() {
    createCanvas(600, 300);
    imageMode(CENTER)
    img1.filter(THRESHOLD);
    img2.filter(THRESHOLD);
}

function draw() {
    background(255);
    if (isNormalActive) {
        NormalSle()
    }
    else {
        InnerEmotionSle()
    }

}

function NormalSle() {
    if (frameCount % 150 <= 35) {
        image(img1, centerX, centerY, theWidth, theHeight);
    } else {
        image(img2, centerX, centerY, theWidth, theHeight);
    }
}

function InnerEmotionSle() {
    if (frameCount % 90 < 30) {
        image(img3, centerX, centerY, changedWidth, changedHeight);
    }
    else {
        image(img4, centerX, centerY, changedWidth, changedHeight);
    }

}

function ChangeSle() {
    isNormalActive = !isNormalActive;
}