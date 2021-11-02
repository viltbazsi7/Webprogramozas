let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');
/*
context.fillStyle = 'red';
context.fillRect(10, 30, 25, 15);
context.font = '72px Comic Sans MS';
context.fillText('Hello, World', 10, 72);

context.beginPath();
context.moveTo(100, 100);
context.lineTo(200, 150);
context.lineTo(60, 45);
context.moveTo(0, 0);
context.lineTo(250, 15);
context.lineTo(45, 200);
context.stroke();

context.beginPath();
context.moveTo(100, 100);
context.lineTo(150, 100);
context.lineTo(150, 150);
context.lineTo(100, 150);
context.closePath();
context.strokeStyle = 'green';
context.lineWidth = 36;
context.stroke();
context.fillStyle = 'brown';
context.fill();
*/
// Háttér

context.beginPath();
context.fillStyle = 'rgb(64, 128, 255)';
context.fillRect(0, 0, canvas.width, canvas.height);
context.beginPath();
context.fillStyle = 'orange';
context.ellipse(0, 0, 200, 200, 0, 0, Math.PI * 2);
context.fill();
for (let i = 0; i < 5; i++) {
    context.beginPath();
    context.fillStyle = 'rgba(255, 255, 255, 128)';
    context.ellipse(Math.random() * canvas.width, Math.random() * 80 + 20, Math.random() * 25 + 75, Math.random() * 25 + 30, 0, 0, Math.PI * 2);
    context.fill();
}
context.beginPath();
context.ellipse(600, 250, 800, 125, 0, 0, 2 * Math.PI);
context.fillStyle = 'rgb(0, 100, 0)';
context.fill();
context.beginPath();
context.ellipse(50, 250, 800, 125, 0, 0, 2 * Math.PI);
context.fillStyle = 'green';
context.fill();
// Tető
context.beginPath();
context.lineWidth = 6;
context.strokeStyle = 'black';
context.moveTo(80, 100);
context.lineTo(150, 25);
context.lineTo(220, 100);
context.closePath();
context.fillStyle = 'red';
context.fill();
context.stroke();
// Ház
context.beginPath();
context.rect(100, 100, 100, 100);
context.fillStyle = 'white';
context.fill();
context.stroke();
// Ajtó
context.beginPath();
context.rect(140, 150, 20, 50);
context.fillStyle = 'brown';
context.fill();
context.stroke();
// Kerítés
for (let i = 0; i < 10; i++) {
    context.beginPath();
    context.moveTo(200 + i * 20, 200);
    context.lineTo(200 + i * 20, 150);
    context.lineTo(210 + i * 20, 140);
    context.lineTo(220 + i * 20, 150);
    context.lineTo(220 + i * 20, 200);
    context.closePath();
    context.fillStyle = 'rgb(185, 122, 87)';
    context.strokeStyle = 'rgb(136, 0, 21)';
    context.fill();
    context.stroke();
}
let dustnt = document.querySelector('#not-de-dust');
dustnt.addEventListener('load', () => {
    context.drawImage(dustnt, 480, 0, 145, 270, 0, 0, 145, 270);
    context.textAlign = 'center';
    context.font = '36px sans-serif';
    context.fillStyle = 'black';
    context.fillText('Bombsite A', 75, 135);
})
/*
let dognt = document.querySelector('#not-doge');
dognt.addEventListener('load', () => {
    context.drawImage(dognt, 0, 0);
    context.drawImage(dognt, 45, 50, 100, 100, 550, 250, 50, 50);
});*/