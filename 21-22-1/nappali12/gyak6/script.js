let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');
let img = document.querySelector('img');

//context.strokeStyle = '...';

/*
context.fillRect(10, 30, 25, 25);
context.fillStyle = 'red';
context.fillRect(50, 30, 50, 25);
context.fillText('Hello, World', 70, 100);
context.font = '24px sans-serif';
context.strokeStyle = 'green';
context.strokeText('Hello, World', 70, 130);
*/
/*
context.beginPath();
context.lineWidth = 16;
context.moveTo(69, 69);
context.lineTo(120, 120);
context.stroke();
context.closePath();

context.beginPath();
context.lineWidth = 2;
context.fillStyle = 'pink';
context.strokeStyle = 'black';
context.ellipse(256, 256, 20, 20, 0, 0, 2 * Math.PI);
context.rect(320, 256, 20, 20);
context.fill();
context.stroke();
context.closePath();
*/
context.beginPath();
context.fillStyle = '#ababdd';
context.rect(0, 0, canvas.width, canvas.height);
context.fill();
context.closePath();
context.beginPath();
context.fillStyle = 'green';
context.ellipse(60, 320, 480, 100, 0, 0, 2 * Math.PI);
context.fill();
context.closePath();

// felhők
for (let i = 0; i < 8; i++) {
    context.beginPath();
    context.fillStyle = '#666';
    context.ellipse(Math.random() * 480, Math.random() * 200, Math.random() * 30 + 30, Math.random() * 10 + 25, 0, 0, 2 * Math.PI);
    context.fill();
}

context.beginPath();
context.fillStyle = '#eee';
context.rect(75, 200, 100, 100);
context.fill();
context.closePath();
/*
context.beginPath();
context.fillStyle = 'red';
context.moveTo(55, 200);
context.lineTo(125, 125);
context.moveTo(55, 200);
context.lineTo(195, 200);
context.lineTo(65, 200);
context.fill();
context.closePath();*/

context.beginPath();
context.fillStyle = '#cce';
context.rect(80, 220, 30, 30);
context.fill();
context.closePath();

context.beginPath();
context.fillStyle = 'brown';
context.rect(140, 225, 25, 75);
context.fill();
context.closePath();

context.beginPath();
context.fillStyle = 'red';
context.moveTo(55, 200);
context.lineTo(125, 125);
context.moveTo(55, 200);
context.lineTo(195, 200);
context.lineTo(65, 120);
context.fill();
context.stroke();
context.closePath();

// kerítés
for (let i = 0; i < 16; i++) {
    context.beginPath();
    context.lineWidth = 3;
    context.strokeStyle = 'rgb(136, 0, 21)';
    context.fillStyle = 'rgb(185, 122, 87)';
    context.moveTo(175 + i * 20, 300);
    context.lineTo(175 + i * 20, 225);
    context.lineTo(185 + i * 20, 215);
    context.lineTo(195 + i * 20, 225);
    context.lineTo(195 + i * 20, 300);
    context.closePath();
    context.fill();
    context.stroke();
}

/*
context.beginPath();
context.fillStyle = 'rgba(255, 255, 255, 255)';
context.font = '72px Comic Sans MS';
context.strokeText('COMIC SANS XDDD', 0, 72);
*/
context.beginPath();
context.fillStyle = 'pink';
context.arc(200, 200, 100, 0, Math.PI);
context.bezierCurveTo(0, 0, 320, 420, 100, 100);
context.stroke();
img.addEventListener('load', () =>{
    context.drawImage(img, 100, 100, 120, 120, 0, 0, 120, 120);
})
