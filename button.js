var butt = document.getElementById("btn");
var playarea = document.getElementById("backgr");
var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var img = document.getElementById("pics");

butt.addEventListener("click", () => {
    playarea.style.backgroundColor = "red";
    butt.addEventListener("click", () => {
        playarea.style.backgroundColor = "blue";
    });
});

button1.addEventListener("click", () => {
    playarea.style.width = "14rem";
    button1.addEventListener("click", () => {
        playarea.style.width = "23rem";
    });
});

button2.addEventListener("click", () => {
    img.style.display = "block";
    button2.addEventListener("click", () => {
        img.style.display = "none";
    });
});

function button() {
    var btn = document.getElementById("btnHere");
    var bdy = document.getElementById("bdy");
    var text = document.getElementById("text");
    // var textChg = document.querySelector(".textChange")

    btn.addEventListener("click", function() {
        bdy.style.backgroundColor = "red";
        text.classList.add("sliderRotate");
        text.innerHTML = "BaseCamp";
        btn.classList.remove("sliderOut");
    });
}
button();
changeColorToGreen = function() {
    document.querySelector("#color-change-box").style.backgroundColor = "green";
};

changeColorToOrange = function() {
    document.querySelector("#color-change-box").style.backgroundColor =
        "orange";
};
var colorChanger = [changeColorToGreen, changeColorToOrange];
document
    .querySelector("#change-color-button")
    .addEventListener("click", function() {
        colorChanger[Math.floor(Math.random() * colorChanger.length)]();
    });

changeButtonText = function() {
    button = document.querySelector("#move-over-button");
    button.innerText = "Go Away!";
};
changeButtonTextBack = function() {
    button = document.querySelector("#move-over-button");
    button.innerText = "Move over me!";
};

document
    .querySelector("#move-over-button")
    .addEventListener("mouseenter", changeButtonText);
document
    .querySelector("#move-over-button")
    .addEventListener("mouseleave", changeButtonTextBack);
