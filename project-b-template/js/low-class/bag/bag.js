let x, y
let img1, img2, img3, img4, img5, img6
let centerX = 100
let centerY = 100
let theWidth = 120
let theHeight = 140
let changedWidth = 140
let changedHeight = 160
let isNormalActive = true

function preload() {
    img1 = loadImage("js/low-class/bag/bag1.jpg");
    img2 = loadImage("js/low-class/bag/bag2.jpg");
    img3 = loadImage("js/low-class/bag/bag3.jpg");
    img4 = loadImage("js/low-class/bag/bag4.jpg");
    img5 = loadImage("js/low-class/bag/bag5.jpg");
    img6 = loadImage("js/low-class/bag/bag6.jpg")
}

function setup() {
    createCanvas(640, 425);
    imageMode(CENTER)
    img1.filter(THRESHOLD);
    img2.filter(THRESHOLD);
    img3.filter(THRESHOLD);
    img4.filter(THRESHOLD);
}

function draw() {
    background(255);
    if (isNormalActive) {
        NormalBag()
    }
    else {
        InnerEmotionBag()
    }

}

function NormalBag() {
    if (frameCount % 150 <= 35) {
        image(img1, centerX, centerY, theWidth, theHeight);
    } else if (frameCount % 150 <= 80) {
        image(img2, centerX, centerY, theWidth, theHeight);
    } else if (frameCount % 150 <= 120) {
        image(img3, centerX, centerY, theWidth, theHeight);
    } else if (frameCount % 150 <= 150) {
        image(img4, centerX, centerY, theWidth, theHeight);
    }
}

function InnerEmotionBag() {
    if (frameCount % 90 <= 45) {
        image(img5, centerX, centerY, changedWidth, changedHeight);
    }
    else {
        image(img6, centerX, centerY, changedWidth, changedHeight);
    }

}

function ChangeBag() {
    isNormalActive = !isNormalActive;
}