console.log(document);

// A CSS selectorokról bővebben itt lehet olvasni: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors
console.log(document.querySelector('#elso'))
console.log(document.querySelector('.masodik'));
console.log(document.querySelector('div > p > input'));
console.log(document.querySelector('div input'));
console.log(document.querySelector('input[type=number]'));
console.log(document.querySelectorAll('p > *'));
console.log(document.getElementById('elso'));
console.log(document.getElementsByClassName('piros'));

let harmadik = document.querySelector('#harmadik');
console.log(harmadik.querySelector('p'));

// A HTML-ben megadott style attribútum tartalma felülírja az important-nek jelölt CSS szabályt
document.querySelector('h1').style.color = 'blue';

/*
let input = document.querySelector('input[type=text]');
console.log(input.type);
console.log(input.value);
console.log(input.readOnly);
input.readOnly = false;
input.disabled = true;

let negyedik = document.querySelector('#negyedik');
console.log(negyedik.innerHTML);
//negyedik.style.color = 'green';
//negyedik.style.color = 'rgb(0, 255, 0)';
console.log(window.getComputedStyle(negyedik));

negyedik.querySelector('p').innerText = 'Lóránd';
let bekezdesek = negyedik.querySelectorAll('p');
console.log(bekezdesek);
negyedik.innerHTML = '<p>Eötvös</p><p>ELTE</p><p>Egyetem</p>';

let div = document.createElement('div');
div.innerText = 'Ezt kóddal hoztam létre!';
//document.body.appendChild(div);
//negyedik.appendChild(div);
//let masodik_bekezdes = negyedik.querySelector('p:nth-child(2)');
//negyedik.insertBefore(div, masodik_bekezdes);
*/

// Elemek létrehozása kóddal

let filmek_table = document.querySelector('table#filmek');

let tr = document.createElement('tr');
for (let cim of film_mezok) {
    let th = document.createElement('th');
    th.innerText = cim;
    tr.appendChild(th);
}
filmek_table.appendChild(tr);

for (let film of filmek) {
    let tr = document.createElement('tr');

    for (let tulajdonsag in film) {
        let td = document.createElement('td');
        td.innerText = film[tulajdonsag];
        tr.appendChild(td);
    }

    filmek_table.appendChild(tr);
}

let tracklist_ol = document.querySelector('#tracklist');

for (let dal of album.tracklist) {
    let li = document.createElement('li');

    li.innerText = dal.cim;

    if (dal.klip) {
        //li.style.fontWeight = 'bold';
        li.classList.add('vastag');
    }

    if (dal.single) {
        li.classList.toggle('dolt');
    }

    tracklist_ol.appendChild(li);

}

// Elemek manipulálása kóddal

let szines = document.querySelectorAll('[data-color]');
szines.forEach((elem) => {
    elem.style.color = elem.dataset.color;
});

document.querySelectorAll('[data-count]').forEach((elem) => {
    let szoveg = elem.innerText;
    let darab = Number.parseInt(elem.dataset.count);
    for (let i = 1; i < darab; i++) {
        elem.innerText += szoveg;
    }
});