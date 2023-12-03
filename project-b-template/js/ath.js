let x, y
let img1, img2, img3, img4, img5
let centerX = 140
let centerY = 140
let theWidth = 250
let theHeight = 210
let changedWidth = 270
let changedHeight = 230
let isNormalActive = true
let mySound;

function preload() {
    img1 = loadImage("js/pics/ath1.jpg");
    img2 = loadImage("js/pics/ath2.jpg");
    img3 = loadImage("js/pics/ath3.jpg");
    img4 = loadImage("js/pics/ath4.jpg");
    img5 = loadImage("js/pics/ath5.jpg");
    mySound = loadSound("js/sound/ath.wav");
}

function setup() {
    createCanvas(300, 300);
    imageMode(CENTER)
    img1.filter(THRESHOLD);
    img2.filter(THRESHOLD);
}

function draw() {
    background(255);
    if (isNormalActive) {
        NormalAth()
    }
    else {
        InnerEmotionAth()
    }

}

function NormalAth() {
    if (frameCount % 150 <= 35) {
        image(img1, centerX, centerY, theWidth, theHeight);
    } else {
        image(img2, centerX, centerY, theWidth, theHeight);
    }
}

function InnerEmotionAth() {
    if (frameCount % 120 < 40) {
        image(img3, centerX, centerY, changedWidth, changedHeight);
    }
    else if (frameCount % 120 < 80) {
        image(img4, centerX, centerY, changedWidth, changedHeight);
    }
    else if (frameCount % 120 < 120) {
        image(img5, centerX, centerY, changedWidth, changedHeight);
    }
}

function ChangeAth() {
    isNormalActive = !isNormalActive;
    localStorage.setItem("state", "ath");
    if (!mySound.isPlaying()) {
        mySound.play();
    }
}