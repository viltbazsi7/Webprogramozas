// LOGIKA:
let szo;    // szöveg
let tippek; // tömb
const maxtipp = 10;

function tippel(betu) {
    if (veszit() || nyer()) {
        return false;
    }
    tippek.push(betu);
    return true;
}

function nyer() {
    return szo.split('').every(betu => tippek.includes(betu));
}

function rosszTippek() {
    return tippek.filter(betu => !szo.includes(betu));
}

function veszit() {
    return rosszTippek().length == maxtipp;
}

// FELÜLET:
let szoDiv = document.querySelector('#szo');
let betukDiv = document.querySelector('#betuk');
let eletDiv = document.querySelector('#elet');
function genSzo() {
    szoDiv.innerHTML = szo.split('').reduce((html, betu) => html + `<span class="${veszit() && !tippek.includes(betu) ? 'hianyzo' : ''}">${veszit() || tippek.includes(betu) ? betu : '_'}</span>`, '');
}
function genBetuk() {
    betukDiv.innerHTML = 'aábcdeéfghiíjklmnoóöőpqrstuúüűvwxyz'.split('').reduce((html, betu) => html + `<button ${tippek.includes(betu) ? 'disabled' : ''}>${betu}</button>`, '');
    /*betukDiv.innerHTML = '';
    'aábcdeéfghiíjklmnoóöőpqrstuúüűvwxyz'.split('').forEach(betu => {
        let button = document.createElement('button');
        button.id = betu;
        button.innerText = betu;
        button.disabled = tippek.includes(betu);
        betukDiv.appendChild(button);
    });*/
}
function genElet() {
    eletDiv.innerText = `${maxtipp - rosszTippek().length}/${maxtipp}`;
}
betukDiv.addEventListener('click', event => {
    if (event.target.matches('button')) {
        if (tippel(event.target.innerText)) {
            event.target.disabled = true;
            update();
        }
    }
});
/*document.addEventListener('keydown', event => {
    let betu = event.key.toLowerCase();
    if ('aábcdeéfghiíjklmnoóöőpqrstuúüűvwxyz'.includes(betu)) {
        if (tippel(betu)) {
            document.querySelector(`#${betu}`).disabled = true;
            update();
        }
    }
});*/

function update() {
    genSzo();
    //genBetuk();
    genElet();
    szoDiv.classList.remove('nyer');
    if (nyer())
        szoDiv.classList.add('nyer');
}
function start() {
    szo = szavak[Math.floor(Math.random() * szavak.length)];
    tippek = [];
    genBetuk();
    update();
}
start();
document.querySelector('#uj').addEventListener('click', start);

// Egyéb bemutató
/*let tesztDiv = document.querySelector('#teszt');
let tesztP = tesztDiv.querySelector('p');
console.log(tesztP, tesztP.innerText);
tesztDiv.innerHTML = '<p>Ez egy másik teszt!</p>';
console.log(tesztP, tesztP.innerText);*/
//tesztDiv.appendChild(tesztP);