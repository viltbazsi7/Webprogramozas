const txtNumbers = document.querySelector('#numbers')
const task1 = document.querySelector('#task1')
const task2 = document.querySelector('#task2')
const task3 = document.querySelector('#task3')
const task4 = document.querySelector('#task4')
const task5 = document.querySelector('#task5')

txtNumbers.addEventListener('input', () => {
    let tomb = txtNumbers.value.split(',');
    console.log(tomb);
    tomb = tomb.filter(e => e.trim() != '').map(e => Number(e));
    let jo = tomb.every(e => !isNaN(e));
    txtNumbers.classList.toggle('error', !jo);
    if (jo) {
        task1.innerText = tomb.filter(e => e % 3 == 0).length;
        task2.innerText = tomb.find(e => e < 0) || 'No negative number';
        /*
        if (tomb.every(e => e % 2 == 1) { // feltétel ?
            task3.innerText = 'All odds.';
        } else { // igaz ág : hamis ág
            task3.innerText = 'Evens also.';
        }
        */
        task3.innerText = tomb.every(e => e % 2 == 1) ? 'All odds' : 'Evens also';
        task4.innerText = tomb.reduce((max, e) => e > max ? e : max, Number.NEGATIVE_INFINITY);
        task5.innerText = tomb.filter((e, i, tomb) => tomb.slice(0, i).every(prev => prev !== e)).join(',');
    }
});