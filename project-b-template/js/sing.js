let x, y
let img1, img2, img3, img4, img5
let centerX = 130
let centerY = 130
let theWidth = 220
let theHeight = 230
let changedWidth = 240
let changedHeight = 250
let isNormalActive = true
let mySound;

function preload() {
    img1 = loadImage("js/pics/sing1.jpg");
    img2 = loadImage("js/pics/sing2.jpg");
    img3 = loadImage("js/pics/sing3.jpg");
    img4 = loadImage("js/pics/sing4.jpg");
    img5 = loadImage("js/pics/sing5.jpg");
    mySound = loadSound("js/sound/sing.mp3");
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
        NormalSing()
    }
    else {
        InnerEmotionSing()
    }

}

function NormalSing() {
    if (frameCount % 150 <= 55) {
        image(img1, centerX, centerY, theWidth, theHeight);
    } else if (frameCount % 150 <= 80) {
        image(img2, centerX, centerY, theWidth, theHeight);
    } else if (frameCount % 150 <= 150) {
        image(img3, centerX, centerY, theWidth, theHeight);
    }
}

function InnerEmotionSing() {
    if (frameCount % 100 < 50) {
        image(img4, centerX, centerY, changedWidth, changedHeight);
    }
    else {
        image(img5, centerX, centerY, changedWidth, changedHeight);
    }
}

function ChangeSing() {
    isNormalActive = !isNormalActive;
    localStorage.setItem("state", "sing");
    if (!mySound.isPlaying()) {
        mySound.play();
    }
}