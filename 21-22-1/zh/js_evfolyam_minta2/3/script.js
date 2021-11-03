const canvas  = document.querySelector("canvas")
const ctx     = canvas.getContext("2d")

const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const next = document.querySelector('#next');
const sim = document.querySelector('#sim');


let statisztika = [];
for (let i = 0; i < 7; i++) {
    statisztika.push(50 + Math.floor(Math.random() * 301));
}
console.log(statisztika);
statisztika[7] = statisztika[6];

function draw(){
    ctx.drawImage(bg, 0, 0)
    // TODO
    for (let i = 0; i < 7; i++) {
        ctx.beginPath();
        ctx.moveTo(100 + i * 100, canvas.height - statisztika[i]);
        ctx.lineTo(100 + (i + 1) * 100, canvas.height - statisztika[i + 1]);
        ctx.strokeStyle = i < 6 ? 'blue' : 'red';
        ctx.lineWidth = 3;
        ctx.stroke();
    }
}

let bg        = new Image()
bg.src        = "bg.png"
bg.onload     = draw

plus.addEventListener('click', () => {
    statisztika[7] += 10;
    draw();
});

minus.addEventListener('click', () => {
    statisztika[7] -= 10;
    draw();
});

next.addEventListener('click', () => {
    statisztika.shift();
    statisztika.push(statisztika[6]);
    draw();
});

let interval;
sim.addEventListener('click', () => {
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(function() {
        statisztika.shift();
        statisztika.push(statisztika[6] / 2);
        draw();
    }, 500);
});