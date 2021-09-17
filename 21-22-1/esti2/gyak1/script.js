console.log('Hello, World!'); // Kiírjuk a konzolra, hogy "Hello, World!".
console.log('Ez egy hiba');   // Kiírunk egy hibaüzenetet a konzolra. A log-al ellentétben megkülönböztett megjelenést kap..

let alma = 'almafa'; // A let kulcsszóval tudunk létrehozni változókat. Ezeket nem kötelező egyből inicializálni.
console.log(alma);   // Kiírjuk a konzolra az alma változó értéket, ezesetben az "almafa" szót.
alma = 'barackfa';   // Ezt a változót bármikor felülírhatjuk.

let szam = 42; // A változókban bármilyen típust tárolhatunk.

console.log('alma' + 'fa'); // Szövegeket az összeadás műveletével tudunk összefűzni. Az eredmény: "almafa".
console.log(4 + 5);         // Számok esetén a megfelelő matematikai művelet végződik el. Az eredmény: 9.
console.log('alma' + 5);    // Hogyha bármit szöveghez fűzünk, akkor az is szöveggé változik. Az eredmény: "alma5".

const konstans = 100; // Konstansokat a const kulcsszóval tudunk létrehozni. Kötelező kezdőértéket adni, új értéket ezután nem tudunk adni neki, viszont tudjuk módosítani a benne található elemet.

// A let-tel létrehozott változók azonban csak abban a blokkban léteznek, melyben létrejöttek (Blokk: minden, ami { }-en belül történik, például egy függvény vagy egy ciklus törzse)
{
	let blokk = 'be vagyok zárva, segítség!';
}
try {
    console.log(blokk); // Sajnos a blokk változó nem érhető el innen.
} catch (hiba) {
    console.error(hiba); // Azt az üzenetet kapjuk, hogy a blokk nincs definiálva.
}

// A let és const egyaránt csak a blokkokon belül létezik, a var azonban globális.
{
    var global = 'globális változó';
}
console.log(global); // Sikeresen kiíródik a változó tartalma: "globális változó".

let tomb = [1, 88888, 2, 3, 4, 5, 9523, 435, 645]; // Tömböket [ ]-el készíthetünk, az indexelés automatikusan 0-val kezdődik.
let tomb2 = ['asd', 'hello'];
let tomb3 = [1, 2, 'szöveg', true, false];         // A tömbökben bárhogyan keverhetjük a különböző típusú változókat.

// Objektumokat { }-el készítünk. Az objektumnak tulajdonságokat tudunk adni "tulajdonsag: ertek" formában, vesszővel elválasztva őket egymástól.
// Az objektumok kvázi asszociatív tömbök, azaz szöveghez rendelt értékek.
let objektum = {
    nev: 'Pelda Miska',
    eletkora: 24,
    lakhely: 'Budapest',
    ELTEre_jar: false
};
// Itt is mindenféle típust használhatunk.

console.log(objektum);        // Kiírhatjuk az egész objektumot, ilyenkor minden tulajdonságot láthatunk. Fontos megjegyezni, hogy ilyen formában objektumot kiírni csak konzolra érdemes. Szövegre nem konvertálódik automatikusan az objektum!
console.log(objektum.nev);    // De kiírhatunk a tulajdonságokat is külön.
console.log(objektum['nev']); // És indexként is használhatjuk a tulajdonság nevét.

// Szövegeket megadhatunk " " vagy ' ' között, különbség nincsen. Lehetőleg csak az egyiket használjuk a kódjainkban!
console.log("dupla" + 'szimpla'); // Összefűzhető mindkét fajta egymással.
// Különleges azonban a ` ` (backtick, AltGr+7) közé írt szöveg. Ezekbe könnyedén tudunk behelyettesíteni értékeket anélkül.
// Így nem kell ilyesmit írni: 'Pelda Miska eletkora ' + objektum.eletkora + '.'
// A ${ } közé írhatunk bármit, ami valamilyen értéket nyújt, vagyis változót, függvényt, matematikai műveletet stb.
console.log(`Pelda Miska eletkora ${objektum.eletkora}.`); // Eredmény: "Pelda Miska eletkora 24."
// A hármas operátor (ternary operator) egy egysorosított if. Használata: feltétel ? igaz érték : hamis érték;
// Hogyha Példa Miska az ELTE-re jár, akkor az első ág értéke lesz behelyettesítve, hogyha nem, akkor a másodiké.
console.log(`Pelda Miska ${ objektum.ELTEre_jar ? 'az ELTE-re jár' : 'nem az ELTE-re jár' }.`);

// A tömböket különböző módokon járhatjuk be
console.log('for i..tomb.length');
for (let i = 0; i < tomb.length; i++) { // Tradicionálisan az indexeken végiglépkedve
    console.log(tomb[i]);
}
console.log('for of');
// De iteratív módon végigmehetünk a tömb elemjein is.
for (let elem of tomb) { // Ezesetben a tomb elemein megyünk végig, a ciklus törzsében az elem jelöli az aktuális elemet
    console.log(elem);
}
console.log('for in');
// Vagy szintén iteratív módon végigmehetünk a tömb indexein is.
for (let index in tomb) { // Ezesetben a ciklus törzsében az index jelöli az aktuális indexet
    console.log(index, tomb[index]); // A konzolraíráskor a vesszővel elválasztott értékek szóközzel elválasztva íródnak ki. Bármennyit kiírhatunk.
}

// Függvényeket egyszerűen a function kulcsszóval és egy névvel alkothatunk.
function fgv1() {
    console.log('ez a fgv1'); // Ez a függvény a konzolra ír
}
fgv1(); // És egyszerűen a nevükkel meghívhatjuk őket. A függvény törzse kiírja az üzenetét.

// Paramétereket a függvény neve utáni zárójelben adhatunk meg. Bármennyit megadhatunk és bárhogyan nevezhetjük őket.
function fgv2(szam) {
    return szam * 2; // Ez a függvény vissza adja a paraméterül kapott érték kétszeresét.
}
console.log(fgv2(256)); // Az eredmény 512 lesz.

// A tömbfüggvények gyakorlatilag a programozási tételek megvalósításai.
// Ezekhez kell valamilyen függvény, amit a tömbfüggvény belül egyesével használni fog a tömb elemein.
// Első paraméterként mindig az aktuálisan vizsgált elem kerül átadásra, másodikként az aktuális index.

// Az alábbi függvények megmondják egy számról, hogy osztható-e kettővel, vagyis páros-e.
// A lenti függvény csak az aktuálisan vizsgált elemet (szam) fogadja.
/*
function oszthato2vel(szam) {
    return szam % 2 == 0;
}
*/
// Ez a függvény viszont fogadja az elemet (szam) és az indexet (index) is.
function oszthato2vel(szam, index) {
    console.log(`éppen a ${index}. számot vizsgálom`);
    return szam % 2 == 0;
}
// A find a keresés tételének felel meg. Megkeresi és visszaadja az első olyan elemet, amire igazat ad vissza a függvény.
console.log(tomb.find(oszthato2vel));
// A some az eldöntés tételének felel meg. Megmondja, hogy van-e legalább egy elem, amire igazat ad vissza a függvény.
console.log(tomb.some(oszthato2vel));
// Az every az eldöntésen túl azt vizsgálja, hogy minden elemre igazat ad vissza a függvény.
console.log(tomb.every(oszthato2vel));
// A filter a kiválogatás tételének felel meg. Kiválogatja egy új tömbbe azokat az elemeket, amire igazat ad vissza a függvény.
console.log(tomb.filter(oszthato2vel));

// A filmek tömb objektumokat tárol, amik különböző filmeket írnak le.
let filmek = [
    {
        cim: 'Star Wars',
        ev: 1977,
        rendezo: 'George Lucas',
        bevetel: 775
    },
    {
        cim: 'Inception',
        ev: 2010,
        rendezo: 'Christopher Nolan',
        bevetel: 836
    },
    {
        cim: 'Spider-Man 2',
        ev: 2004,
        rendezo: 'Sam Raimi',
        bevetel: 789
    },
    {
        cim: 'Interstellar',
        ev: 2014,
        rendezo: 'Christopher Nolan',
        bevetel: 677
    },
    {
        cim: 'The Martian',
        ev: 2015,
        rendezo: 'Ridley Scott',
        bevetel: 630
    },
    {
        cim: 'Avengers: Endgame',
        ev: 2019,
        rendezo: 'Anthony és Joe Russo',
        bevetel: 2798
    },
    {
        cim: 'Tenet',
        ev: 2020,
        rendezo: 'Christopher Nolan',
        bevetel: 363
    }
];

// Ez a függvény megvizsgálja, hogy az adott filmet Christopher Nolan rendezte-e.
function nolan(film) {
    return film.rendezo == 'Christopher Nolan';
}
console.log(filmek.filter(nolan)); // Megkeressük az összes filmet, amit Nolan rendezett.
// Külön függvény létrehozása helyett megírhatjuk a függvényt paraméterként is.
// Ilyenkor paraméterként is átadhatjuk a tömbfüggvénynek.
// Ezt megtehetjük névtelen függvényként vagy nyíl függvényként.
console.log(filmek.filter(function (film) { return film.rendezo == 'Christopher Nolan' }));
console.log(filmek.filter(film => film.rendezo == 'Christopher Nolan')); // A nyílfüggvény esetén elhagyhatjuk a return kulcsszót, hogyha egyszerű műveletet végzünk.

// A map leképezi a függvényt egy új tömbbe. Ezesetben az új tömb elemei csak a bevétel értékek lesznek.
console.log(filmek.map(film => film.bevetel)); // [775, 836, 789, 677, 630, 2798, 363]

// Az alábbi függvény először kiválogatja a 2015 előtti filmeket, majd leképezi a kiválogatott filmeket a bevételükre.
console.log(filmek.filter(film => film.ev < 2015).map((film) => film.bevetel));

// A reduce az összegzés tétele, amire minden visszavezethető. Így a bevételek összeadását reduce-al végezhetjük.
// A reduce függvénye azonban nem értékkel és indexszel dolgozik, hanem egy összeggel és az aktuális elemmel.
// Elsőre az alábbi megoldás tűnhet logikusnak:
console.log(filmek.reduce((osszeg, film) => osszeg + film.bevetel));
// Azonban ekkor a konzolon ez fog fogadni: "[object Object]8367896776302798363"
// Hogyha megnézzük az adatokat, láthatjuk, hogy valójában a bevételi számok lettek összefűzve szövegként és az első film bevétele nem szerepel.
// Ez azért történt, mert a reduce kezdőérték hiányában kezdőértékként felveszi a tömb legelső elemét,
// így az első körben (első film, második film) paraméterezéssel hívja meg a függvényt.
// Kezdőérték esetén az első futáskor (kezdőérték, első film) paraméterezéssel hívja meg a függvényt. Kezdőértéket második paraméterként adhatunk meg:
console.log(filmek.reduce((osszeg, film) => osszeg + film.bevetel, 0));
// Mostmár megkapjuk a megfelelő összeget: 6868; 

// Az alábbi függvény kiírja a paraméterül kapott film címét és megjelenésének évét
function filmcim(film) {
    console.log(`${film.cim} (${film.ev})`);
}
// A tömbfüggvények közé tartozik a bejárás egy újabb lehetséges formája:
filmek.forEach(filmcim);
filmek.forEach((film, index) => { console.log(`${index}.: ${film.cim} (${film.ev})`)});
filmek.forEach(function (film, index) {
    console.log(`${index}.: ${film.cim} (${film.ev})`);
});