let x, y
let img1, img2, img3, img4, img5
let centerX = 140
let centerY = 130
let theWidth = 220
let theHeight = 240
let changedWidth = 230
let changedHeight = 260
let isNormalActive = true

function preload() {
    img1 = loadImage("xiaojie1.jpg");
    img2 = loadImage("xiaojie2.jpg");
    img3 = loadImage("xiaojie3.jpg");
    img4 = loadImage("xiaojie4.jpg");
    img5 = loadImage("xiaojie5.jpg");
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
        NormalXiaojie()
    }
    else {
        InnerEmotionXiaojie()
    }

}

function NormalXiaojie() {
    if (frameCount % 150 <= 35) {
        image(img1, centerX, centerY, theWidth, theHeight);
    } else if (frameCount % 150 <= 80) {
        image(img2, centerX, centerY, theWidth, theHeight);
    } else if (frameCount % 150 <= 150) {
        image(img3, centerX, centerY, theWidth, theHeight);
    }
}

function InnerEmotionXiaojie() {
    if (frameCount % 90 < 45) {
        image(img4, centerX, centerY, changedWidth, changedHeight);
    }
    else {
        image(img5, centerX, centerY, changedWidth, changedHeight);
    }
}

function ChangeXiaojie() {
    isNormalActive = !isNormalActive;
}