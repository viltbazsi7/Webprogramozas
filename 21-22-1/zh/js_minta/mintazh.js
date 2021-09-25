// Ezt a delegálás függvényt egy-az-egyben felhasználhatjátok
function delegal(szulo, gyerek, mikor, mit) {
    function esemenyKezelo(esemeny) {
        let esemenyCelja    = esemeny.target;
        let esemenyKezeloje = this;
        let legkozelebbiKeresettElem = esemenyCelja.closest(gyerek);
        if (esemenyKezeloje.contains(legkozelebbiKeresettElem)) {
            mit(esemeny, legkozelebbiKeresettElem);
        }
    }
    szulo.addEventListener(mikor, esemenyKezelo);
}

let helyszinek = [
    'Etyek',
    'Érd',
    'III. Kerület',
    'Margit-sziget',
    'Normafa',
    'Pusztafalu',
    'XI. Kerület'
];
let ul = document.querySelector('ul');

for (let helyszin of helyszinek) {
    let li = document.createElement('li');
    li.innerText = helyszin;
    li.dataset.helyszin = helyszin;
    //li.addEventListener('click', () => li.classList.toggle('kijelolve'));
    ul.appendChild(li);
}
delegal(ul, 'li', 'click', (esemeny, li) => {
    li.classList.toggle('kijelolve');
});

let nevinput = document.querySelector('#nev');
let nevgomb = document.querySelector('#nevgomb');

nevgomb.addEventListener('click', () => {
    document.querySelectorAll('.kijelolve').forEach(elem => {
        elem.innerText = nevinput.value;
    });
});

let szininput = document.querySelector('#szin');
let szingomb = document.querySelector('#szingomb');

szingomb.addEventListener('click', () => {
    let szin = szininput.value;
    document.querySelectorAll('.kijelolve').forEach(elem => {
        if (szin == 'piros') {
            elem.style.color = 'red';
        } else if (szin == 'zöld') {
            elem.style.color = 'green';
        } else if (szin == 'kék') {
            elem.style.color = 'blue';
        }
        // vagy
        /*
        switch (szin) {
            case 'piros':
                elem.style.color = 'red';
                break;
            case 'zöld':
                elem.style.color = 'green';
                break;
            case 'kék':
                elem.style.color = 'blue';
                break;
        }
        */
    });
});

let reset = document.querySelector('#reset');

reset.addEventListener('click', () => {
    document.querySelectorAll('.kijelolve').forEach(elem => {
        elem.style.color = 'black';
        elem.innerText = elem.dataset.helyszin;
    });
});