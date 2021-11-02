//let szo = szavak[Math.floor(Math.random() * szavak.length)];
//let tippek = [];
//let szo = 'almafa';
//let tippek = ['a', 'f'];
let szo;
let tippek;
const maxtipp = 10;

let akasztofa = document.querySelector('#akasztofa');
let afSzo = akasztofa.querySelector('#szo');
let afBetuk = akasztofa.querySelector('#tippek');
let afElet = akasztofa.querySelector('#elet');
let afUj = akasztofa.querySelector('#uj');
const betuk = 'aábcdeéfghiíjklmnoóöőpqrstuúüűvwxyz';

//afSzo.innerHTML = szo.split('').reduce((html, karakter) => html + '<span></span>', '');
//afBetuk.innerHTML = betuk.split('').reduce((html, karakter) => html + `<button>${karakter}</button>&nbsp;`, '');

function tippel(betu) {
    tippek.push(betu);
}
function nyer() {
    return szo.split('').every(karakter => tippek.includes(karakter));
}
function veszit() {
    return rosszTippek().length == maxtipp;
}
function rosszTippek() {
    return tippek.filter(karakter => !szo.includes(karakter));
}

// Felület
function genSzo() {
    afSzo.innerHTML = szo
                    .split('')
                    .reduce(
                        (html, karakter) => 
                            html + `<span class="${veszit() && !tippek.includes(karakter) ? 'hianyzo': ''}">${veszit() || tippek.includes(karakter) ? karakter : ''}</span>`, '');
}
function genBetuk() {
    afBetuk.innerHTML = betuk.split('').reduce((html, karakter) => html + `<button ${tippek.includes(karakter) ? 'disabled' : ''}>${karakter}</button>`, '');
}
function genSzamlalo() {
    afElet.innerText = `${maxtipp - rosszTippek().length}/${maxtipp}`;
}

afBetuk.addEventListener('click', event => {
    if (event.target.matches('button')) {
        if (veszit() || nyer())
            return;
        // beolvasás
        let gomb = event.target;
        // a lenyomott gomb szövege
        let betu = gomb.innerHTML;
        // feldolgozás + tippelés
        tippel(event.target.innerText);
        // kiírás
        genSzo(); // szó aktualizálása
        genBetuk(); // betűk aktualizálása
        genSzamlalo(); // számláló aktualizálás

        if (nyer()) {
            afSzo.classList.add('nyer');
        }
    }
});
document.addEventListener('keydown', event => {
    if (veszit() || nyer())
        return;
    let betu = event.key.toLowerCase();
    if (betuk.includes(betu)) {
        tippel(betu);
        genSzo(); // szó aktualizálása
        genBetuk(); // betűk aktualizálása
        genSzamlalo(); // számláló aktualizálás
    }
});

function start() {
    szo = szavak[Math.floor(Math.random() * szavak.length)];
    tippek = [];
    console.log(szo);
    genSzo();
    genBetuk();
    genSzamlalo();
}
start();

afUj.addEventListener('click', start);