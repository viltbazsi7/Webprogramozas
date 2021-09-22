let button = document.querySelector('#minta > button');

function kattintas(esemeny) {
    console.log(esemeny.x, esemeny.y);
}
button.addEventListener('click', kattintas);
//button.removeEventListener('click', kattintas);

let input = document.querySelector('#minta > input[type=text]');
input.addEventListener('input', esemeny => {
    console.log(input.value);
});

/*document.addEventListener('keydown', esemeny => {
    console.log(esemeny.key);
});*/

// ---------------------------------------------

let todo_button = document.querySelector('#todo > button');
let todo_input = document.querySelector('#todo > input');
let todo_ul = document.querySelector('#todo > ul');

todo_button.addEventListener('click', () => {
    let li = document.createElement('li');
    li.innerText = todo_input.value;
    todo_input.value = '';
    todo_ul.appendChild(li);
    /*li.addEventListener('click', () => {
        li.classList.toggle('kesz');
    });*/
});

delegal(todo_ul, 'li', 'click', (esemeny, gyerek) => {
    gyerek.classList.toggle('kesz');
});

/*document.querySelectorAll('*').forEach(elem => {
    elem.addEventListener('click', esemeny => {
        console.log(esemeny.target, esemeny.currentTarget);
    });
});*/

//----------------------------------
let demo_table = document.querySelector('#demo > table');
delegal(demo_table, 'tr', 'click', (esemeny, tr) => {
    tr.style.backgroundColor = 'rgb(16, 44, 220)';
});
demo_table.addEventListener('click', esemeny => {
    console.log(esemeny.target);
});

// --------------------------
// MINTAZH
// --------------------------

const mintazh_ul = document.querySelector('#mintazh > ul');
const helyszinek = [
    'Etyek',
    'Érd',
    'III. Kerület',
    'Margit-sziget',
    'Normafa',
    'Pusztafalu',
    'XI. Kerület'
];

for (let helyszin of helyszinek) {
    let li = document.createElement('li');
    li.innerText = helyszin;
    li.dataset.eredeti = helyszin;
    /*li.addEventListener('click', () => {
        li.classList.toggle('kijelolve');
    });*/
    mintazh_ul.appendChild(li);
}

delegal(mintazh_ul, 'li', 'click', (esemeny, li) => {
    li.classList.toggle('kijelolve');
});

document.querySelector('#nevgomb').addEventListener('click', () => {
    document.querySelectorAll('.kijelolve').forEach(elem => {
        elem.innerText = document.querySelector('#nev').value;
    });
});

document.querySelector('#szingomb').addEventListener('click', () => {
    document.querySelectorAll('.kijelolve').forEach(elem => {
        let szin = document.querySelector('#szin').value;
        /*if (szin == 'piros') {
            elem.style.color = 'red';
        } else if (szin == 'zöld') {
            elem.style.color = 'green';
        } else if (szin == 'kék') {
            elem.style.color = 'blue';
        }*/
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
    });
});

document.querySelector('#reset').addEventListener('click', () => {
    document.querySelectorAll('.kijelolve').forEach(elem => {
        elem.innerText = elem.dataset.eredeti;
        elem.style.color = 'black';
    });
});