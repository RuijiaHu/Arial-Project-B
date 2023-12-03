let x, y
let img1, img2, img3, img4, img5
let centerX = 140
let centerY = 140
let theWidth = 240
let theHeight = 270
let changedWidth = 260
let changedHeight = 290
let isNormalActive = true
let mySound;

function preload() {
    img1 = loadImage("js/pics/king1.jpg");
    img2 = loadImage("js/pics/king2.jpg");
    img3 = loadImage("js/pics/king3.jpg");
    img4 = loadImage("js/pics/king4.jpg");
    img5 = loadImage("js/pics/king5.jpg");
    mySound = loadSound("js/sound/king.wav");
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
        NormalKing()
    }
    else {
        InnerEmotionKing()
    }

}

function NormalKing() {
    if (frameCount % 150 <= 35) {
        image(img1, centerX, centerY, theWidth, theHeight);
    } else {
        image(img2, centerX, centerY, theWidth, theHeight);
    }
}

function InnerEmotionKing() {
    if (frameCount % 90 < 30) {
        image(img3, centerX, centerY, changedWidth, changedHeight);
    }
    else if (frameCount % 90 < 60) {
        image(img4, centerX, centerY, changedWidth, changedHeight);
    }
    else if (frameCount % 90 < 90) {
        image(img5, centerX, centerY, changedWidth, changedHeight);
    }
}

function ChangeKing() {
    isNormalActive = !isNormalActive;
    localStorage.setItem("state", "king");
    if (!mySound.isPlaying()) {
        mySound.play();
    }
}