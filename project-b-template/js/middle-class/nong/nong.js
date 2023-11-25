let x, y
let img1, img2, img3, img4
let centerX = 100
let centerY = 100
let theWidth = 120
let theHeight = 140
let changedWidth = 140
let changedHeight = 160
let isNormalActive = true

function preload() {
    img1 = loadImage("js/middle-class/nong/nong1.jpg");
    img2 = loadImage("js/middle-class/nong/nong2.jpg");
    img3 = loadImage("js/middle-class/nong/nong3.jpg");
    img4 = loadImage("js/middle-class/nong/nong4.jpg");
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
        NormalNong()
    }
    else {
        InnerEmotionNong()
    }

}

function NormalNong() {
    if (frameCount % 150 <= 35) {
        image(img1, centerX, centerY, theWidth, theHeight);
    } else {
        image(img2, centerX, centerY, theWidth, theHeight);
    }
}

function InnerEmotionNong() {
    if (frameCount % 90 < 30) {
        image(img3, centerX, centerY, changedWidth, changedHeight);
    }
    else {
        image(img4, centerX, centerY, changedWidth, changedHeight);
    }

}

function ChangeNong() {
    isNormalActive = !isNormalActive;
}