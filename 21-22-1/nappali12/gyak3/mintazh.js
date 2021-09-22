let helyszinek = [
    'Etyek',
    'Érd',
    'III. Kerület',
    'Margit-sziget',
    'Normafa',
    'Pusztafalu',
    'XI. Kerület'
];
let div = document.querySelector('#mintazh');
let ul = div.querySelector('ul');

function toggleSelection(event) {
    event.target.classList.toggle('selected');
}


// stackoverflow #423432. kérdésre 213. válasz
for (let helyszin of helyszinek) {
    let li = document.createElement('li');
    li.innerText = helyszin;
    li.dataset.helyszin = helyszin;
    li.addEventListener('click', toggleSelection);
    li.removeEventListener('click', toggleSelection);
    ul.appendChild(li);
}
/*delegal(ul, 'li', 'click', (esemeny, li) => {
    li.classList.toggle('selected');
});*/

let nevinput = div.querySelector('#nev');
let nevgomb = div.querySelector('#nevgomb');

nevgomb.addEventListener('click', () => {
    div.querySelectorAll('.selected').forEach(elem => {
        elem.innerText = nevinput.value;
    });
});

let szininput = div.querySelector('#szin');
let szingomb = div.querySelector('#szingomb');

szingomb.addEventListener('click', () => {
    let szin = szininput.value;
    div.querySelectorAll('.selected').forEach(elem => {
        if (szin == 'piros') {
            elem.style.color = 'red';
        } else if (szin == 'zöld') {
            elem.style.color = 'green';
        } else if (szin == 'kék') {
            elem.style.color = 'blue';
        }
    });
});

let reset = div.querySelector('#reset');

reset.addEventListener('click', () => {
    div.querySelectorAll('.selected').forEach(elem => {
        elem.style.color = 'black';
        elem.innerText = elem.dataset.helyszin;
    });
});