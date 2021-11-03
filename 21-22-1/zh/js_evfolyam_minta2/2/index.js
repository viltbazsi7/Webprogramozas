const textarea = document.querySelector('#text-image-urls')
const button = document.querySelector('#button-to-select')
const select = document.querySelector('#select-image-urls')
const border = document.querySelector('#border')
const div = document.querySelector('#images')
const bigImage = document.querySelector('#big')

button.addEventListener('click', () => {
    let opciok = textarea.value.split('\n');
    select.innerHTML = '';
    for (let opcio of opciok) {
        let option = document.createElement('option');
        option.innerText = opcio;
        select.appendChild(option);
    }
});

select.addEventListener('change', () => {
    //let kivalasztott = select.selectedOptions;
    let kivalasztott = Array.from(select.selectedOptions);
    div.innerHTML = '';
    for (let kep of kivalasztott) {
        let img = document.createElement('img');
        img.src = kep.innerText;
        div.appendChild(img);
    }
});

div.addEventListener('mouseover', (event) => {
    if (event.target.matches('img')) {
        bigImage.src = event.target.src;
    }
});

function uselessextrafunction() {
    return border.value;
}
border.addEventListener('input', () => {
    bigImage.style.borderWidth = `${uselessextrafunction()}px`;
});