let x, y
let img1, img2, img3
let centerX = 85
let centerY = 70
let theWidth = 170
let theHeight = 135
let changedWidth = 180
let changedHeight = 150
let isNormalActive = true
let mySound;

function preload() {
    img1 = loadImage("js/pics/bri1.jpg");
    img2 = loadImage("js/pics/bri2.jpg");
    img3 = loadImage("js/pics/bri3.jpg");
    mySound = loadSound("js/sound/bri.mp3");
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
    localStorage.setItem("state", "bri");
    if (!mySound.isPlaying()) {
        mySound.play();
    }
}