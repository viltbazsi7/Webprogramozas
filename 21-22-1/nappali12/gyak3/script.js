/*let button = document.querySelector('button');

function onClick(event) {
    console.log('click');
}

//button.addEventListener('click', onClick);

function removeListener() {
    button.removeEventListener('click', onClick);
}

button.addEventListener('click', (event) => {
    console.log(event.target, event.x, event.y);
});

document.querySelector('input[type=text]').addEventListener('input', (event) => {
    console.log('input', event.x, event.y);
});

document.addEventListener('keydown', (event) => {
    console.log(event.key);
});*/

let todoul = document.querySelector('#todo > ul');
let todoinput = document.querySelector('#todo > input');
let todobutton = document.querySelector('#todo > button');

todobutton.addEventListener('click', (event) => {
    let li = document.createElement('li');
    li.innerText = todoinput.value;
    /*li.addEventListener('click', () => {
        li.classList.toggle('done');
    });*/
    todoul.appendChild(li);
});

delegal(todoul, 'li', 'click', (esemeny, gyerek) => {
    gyerek.classList.toggle('done');
});

delegal(document.querySelector('table'), 'tr', 'click', (esemeny, gyerek) => {
    gyerek.style.backgroundColor = '#090122';
})