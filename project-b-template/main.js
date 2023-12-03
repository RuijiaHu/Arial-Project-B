localStorage.setItem("state", 0);


function setup() {
    let canvas = createCanvas(100, 100);
    canvas.hide();
}

function draw() {
    let value = localStorage.getItem("state");
    console.log(value);

    if (value == "gui") {
        let div = document.getElementById("dial-01");
        div.style.display = "flex";
    }
    if (value == "king") {
        let div = document.getElementById("dial-02");
        div.style.display = "flex";
    }
    if (value == "xiaojie") {
        let div = document.getElementById("dial-03");
        div.style.display = "flex";
    }
    if (value == "fu") {
        let div = document.getElementById("dial-04");
        div.style.display = "block";
    }
    if (value == "gang") {
        let div = document.getElementById("dial-05");
        div.style.display = "block";
    }
    if (value == "bri") {
        let div = document.getElementById("dial-06");
        div.style.display = "block";
    }
    if (value == "ent") {
        let div = document.getElementById("dial-07");
        div.style.display = "block";
    }
    if (value == "ast") {
        let div = document.getElementById("dial-08");
        div.style.display = "block";
    }
    if (value == "ath") {
        let div = document.getElementById("dial-09");
        div.style.display = "block";
    }
    if (value == "clo") {
        let div = document.getElementById("dial-10");
        div.style.display = "block";
    }
    if (value == "mom") {
        let div = document.getElementById("dial-11");
        div.style.display = "block";
    }
    if (value == "nong") {
        let div = document.getElementById("dial-12");
        div.style.display = "block";
    }
    if (value == "pol") {
        let div = document.getElementById("dial-13");
        div.style.display = "block";
    }
    if (value == "sing") {
        let div = document.getElementById("dial-14");
        div.style.display = "block";
    }
    if (value == "tea") {
        let div = document.getElementById("dial-15");
        div.style.display = "block";
    }
    if (value == "wor") {
        let div = document.getElementById("dial-16");
        div.style.display = "block";
    }
    if (value == "bag") {
        let div = document.getElementById("dial-17");
        div.style.display = "block";
    }
    if (value == "sle") {
        let div = document.getElementById("dial-18");
        div.style.display = "block";
    }
}