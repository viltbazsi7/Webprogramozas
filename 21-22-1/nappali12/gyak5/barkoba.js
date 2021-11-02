let barkoba = document.querySelector('#barkoba');
let barkobaP = barkoba.querySelector('p');
let barkobaI = barkoba.querySelector('input');
let barkobaB = barkoba.querySelector('button');
let barkobaS = barkoba.querySelector('span');
//console.log(barkoba, barkobaP, barkobaI, barkobaB);

let szam;
let tippek;
function start() {
    szam = Math.floor(Math.random() * 100) + 1;// 1-100 random szám
    tippek = 0;
    barkobaS.innerText = `Tippek: ${tippek}`;
    //console.log(szam);
}
start();

barkobaB.addEventListener('click', () => {
    let tipp = parseInt(barkobaI.value);
    tippek++;
    barkobaS.innerText = `Tippek: ${tippek}`;
    if (tipp < szam) {
        barkobaP.innerText = 'A szám nagyobb!';
    } else if (tipp == szam) {
        barkobaP.innerText = 'Gratulálunk, nyertél! Új játék kezdődik.';
        start();
    } else {
        barkobaP.innerText = 'A szám kisebb!';
    }
});