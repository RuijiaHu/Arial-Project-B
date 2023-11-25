let x, y
let img1, img2, img3
let centerX = 100
let centerY = 100
let theWidth = 120
let theHeight = 140
let changedWidth = 140
let changedHeight = 160
let isNormalActive = true

function preload() {
    img1 = loadImage("js/middle-class/wor/wor1.jpg");
    img2 = loadImage("js/middle-class/wor/wor2.jpg");
    img3 = loadImage("js/middle-class/wor/wor3.jpg");
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
        NormalWor()
    }
    else {
        InnerEmotionWor()
    }

}

function NormalWor() {
    if (frameCount % 150 <= 35) {
        image(img1, centerX, centerY, theWidth, theHeight);
    } else {
        image(img2, centerX, centerY, theWidth, theHeight);
    }
}

function InnerEmotionWor() {
    image(img3, centerX, centerY, changedWidth, changedHeight);
}

function ChangeWor() {
    isNormalActive = !isNormalActive;
}