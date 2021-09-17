// A CSS selectorokról bővebben itt lehet olvasni: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors
let bekezdes = document.querySelector('p');
bekezdes.innerText = 'Én egy bekezdés vagyok.';

let piros = document.querySelector('.piros');
console.log(piros);
bekezdes.innerHTML = 'Ez egy <span class="zold">bekezdés.</span>';
let fontosak = document.querySelectorAll('.fontos');
console.log(fontosak);

let fontos = document.querySelectorAll('body > div:nth-child(3) > p:nth-child(2)');
console.log(fontos);
console.log(fontos.querySelectorAll('span'));
console.log(document.querySelector('body > div:nth-child(3) > p:nth-child(1)').classList);
document.querySelector('body > div:nth-child(3) > p:nth-child(1)').classList.remove('fontos');
document.querySelector('body > div:nth-child(3) > p:nth-child(1)').classList.add('keret');
console.log(document.querySelector('body > div:nth-child(3) > p:nth-child(1)').classList.contains('keret'));
console.log(document.querySelector('body > div:nth-child(3) > p:nth-child(1)').classList.toggle('keret'));
console.log(document.querySelector('body > div:nth-child(3) > p:nth-child(1)').classList.contains('keret'));
console.log(document.querySelector('body > div:nth-child(3) > p:nth-child(1)').classList.toggle('keret'));

document.querySelectorAll('input');
document.querySelector('input[name=keresztnev]');

let p = document.querySelector('#bekezdes');

p.classList.add('zold');
p.classList.add('keret');

// Elemek létrehozása kóddal

let filmek_table = document.querySelector('#filmek');

let tr = document.createElement('tr');

for (let mezo of film_mezok) {
    let th = document.createElement('th');
    th.innerText = mezo;
    tr.appendChild(th);
}

filmek_table.appendChild(tr);

for (let film of filmek) {
    tr = document.createElement('tr');
    
    for (let tulajdonsag in film) {
        let td = document.createElement('td');
        td.innerText = film[tulajdonsag];
        tr.appendChild(td);
    }

    filmek_table.appendChild(tr);
}

let album_ul = document.querySelector('#album');

for (let tulajdonsag in album) {
    let li = document.createElement('li');
    if (tulajdonsag != 'tracklist') {
        li.innerText = `${album_mezok[tulajdonsag]}: ${album[tulajdonsag]}`;
    } else {
        li.innerText = `${album_mezok[tulajdonsag]}:`;
        let tracklist = document.createElement('ol');
        for (let dal of album['tracklist']) {
            let dal_li = document.createElement('li');
            dal_li.innerText = dal.cim;

            if (dal.klip) {
                dal_li.style.fontStyle = 'italic';
                //dal_li.classList.add('dolt');
            }

            if (dal.single) {
                dal_li.style.fontWeight = 'bold';
                //dal_li.classList.add('vastag');
            }

            tracklist.appendChild(dal_li);
        }
        li.appendChild(tracklist);
    }
    album_ul.appendChild(li);
}

// Elemek manipulálása kóddal

let szinezendo = document.querySelector('#szinezendo');

console.log(szinezendo.dataset);

szinezendo.classList.add(szinezendo.dataset.szin);

let szoveg = szinezendo.innerText;
for (let i = 1; i < Number.parseInt(szinezendo.dataset.szam); i++) {
    szinezendo.innerText += szoveg;
}