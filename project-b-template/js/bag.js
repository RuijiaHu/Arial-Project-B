let x, y
let img1, img2, img3, img4, img5, img6
let centerX = 150
let centerY = 150
let theWidth = 190
let theHeight = 270
let changedWidth = 220
let changedHeight = 250
let isNormalActive = true

function preload() {
    img1 = loadImage("js/pics/bag1.jpg");
    img2 = loadImage("js/pics/bag2.jpg");
    img3 = loadImage("js/pics/bag3.jpg");
    img4 = loadImage("js/pics/bag4.jpg");
    img5 = loadImage("js/pics/bag5.jpg");
    img6 = loadImage("js/pics/bag6.jpg");
    img7 = loadImage("js/pics/bag7.jpg")
}

function setup() {
    createCanvas(300, 300);
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
    if (frameCount % 120 <= 45) {
        image(img5, centerX, centerY, changedWidth, changedHeight);
    }
    else if (frameCount % 120 <= 90) {
        image(img6, centerX, centerY, changedWidth, changedHeight);
    }
    else if (frameCount % 120 <= 120) {
        image(img7, centerX, centerY, changedWidth, changedHeight);
    }

}

function ChangeBag() {
    isNormalActive = !isNormalActive;
}