let container = document.querySelector("#balls");

for(let i=0; i<40; i++){
    let ball = document.createElement("span");

    let size = Math.random() * 8 + 4; // random size

    ball.style.width = size + "px";
    ball.style.height = size + "px";

    ball.style.left = Math.random() * 100 + "vw";
    ball.style.top = Math.random() * 100 + "vh";

    ball.style.animationDuration = (Math.random() * 10 + 5) + "s";

    container.appendChild(ball);
}
