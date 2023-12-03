let x, y
let img1, img2, img3, img4
let centerX = 130
let centerY = 130
let theWidth = 220
let theHeight = 240
let changedWidth = 240
let changedHeight = 260
let isNormalActive = true
let mySound;

function preload() {
    img1 = loadImage("js/pics/gui1.jpg");
    img2 = loadImage("js/pics/gui2.jpg");
    img3 = loadImage("js/pics/gui3.jpg");
    img4 = loadImage("js/pics/gui4.jpg");
    mySound = loadSound("js/sound/gui.mp3");
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
        NormalGui()
    }
    else {
        InnerEmotionGui()
    }

}

function NormalGui() {
    if (frameCount % 150 <= 35) {
        image(img1, centerX, centerY, theWidth, theHeight);
    } else {
        image(img2, centerX, centerY, theWidth, theHeight);
    }
}

function InnerEmotionGui() {
    if (frameCount % 90 < 60) {
        image(img3, centerX, centerY, changedWidth, changedHeight);
    }
    else {
        image(img4, centerX, centerY, changedWidth, changedHeight);
    }

}

function ChangeGui() {
    isNormalActive = !isNormalActive;
    localStorage.setItem("state", "gui");
    if (!mySound.isPlaying()) {
        mySound.play();
    }
}