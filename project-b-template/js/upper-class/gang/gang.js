let x, y
let img1, img2, img3, img4
let centerX = 90
let centerY = 75
let theWidth = 165
let theHeight = 125
let changedWidth = 180
let changedHeight = 135
let isNormalActive = true

function preload() {
    img1 = loadImage("gang1.jpg");
    img2 = loadImage("gang2.jpg");
    img3 = loadImage("gang3.jpg");
    img4 = loadImage("gang4.jpg");
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
        NormalGang()
    }
    else {
        InnerEmotionGang()
    }

}

function NormalGang() {
    if (frameCount % 150 <= 35) {
        image(img1, centerX, centerY, theWidth, theHeight);
    } else {
        image(img2, centerX, centerY, theWidth, theHeight);
    }
}

function InnerEmotionGang() {
    if (frameCount % 90 < 30) {
        image(img3, centerX, centerY, changedWidth, changedHeight);
    }
    else {
        image(img4, centerX, centerY, changedWidth, changedHeight);
    }

}

function ChangeGang() {
    isNormalActive = !isNormalActive;
}