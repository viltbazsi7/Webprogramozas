function fetchke(url, fuggveny) {
    return fetch(url)
    .then(valasz => valasz.json())
    .then(json => fuggveny(json));
}
let mail = document.querySelector('.mail');
let loading = document.querySelector('.loading');
let error = document.querySelector('.error');

function emailMegjelenito(json) {
    loading.hidden = true;
    if (json.statusz == 200) {
        mail.hidden = false;
        mail.querySelector('.felado').innerText = json.felado;
        mail.querySelector('.targy').innerText = json.targy;
        mail.querySelector('.datum').innerText = json.datum;
        mail.querySelector('.szoveg').value = json.szoveg;
    } else {
        error.hidden = false;
        error.innerText = `Hiba: ${json.statusz}: ${json.uzenet}`;
    }
}

document.querySelectorAll('.inbox a').forEach(elem => {
    elem.addEventListener('click', () => {
        loading.hidden = false;
        error.hidden = true;
        mail.hidden = true;
        fetchke(`mail.php?neptun=${elem.dataset.neptun}&id=${elem.dataset.id}`, emailMegjelenito);
    });
})