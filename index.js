var number1 = Math.random() * 6;
number1 = Math.floor(number1) + 1;

var number2 = Math.random() * 6;
number2 = Math.floor(number2) + 1;

let image1 = document.querySelector(".img1");
let image2 = document.querySelector(".img2");

image1.setAttribute("src", `images/dice${number1}.png`);
image2.setAttribute("src", `images/dice${number2}.png`);

if (number1 === number2) {
    let heading = document.querySelector("h1");
    heading.innerHTML = "Draw!";
}
else if (number1 > number2){
    let heading = document.querySelector("h1");
    heading.innerHTML = "🚩Player1 Wins!";
}
else
{
    let heading = document.querySelector("h1");
    heading.innerHTML = "Player2 Wins!🚩";
}

