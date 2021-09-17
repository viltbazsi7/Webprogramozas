console.log('Helló, Világ!');                 // A konzolra a "console" objektum "log" metódusával tudunk
console.log('egy ilyen' + "egy olyan" + 123); // Szövegeket az összeadás műveleti jelével tudunk összefűzni, a számok szintén szövegként fűzödnek hozzá ilyenkor
console.log(123 + 456);                       // Ilyenkor viszont az összeadás megfelelően végződik el
console.log('ABC', 123, true);                // Egyszerre több elemet is ki tudunk írni, ilyenkor szóközzel elválasztva íródnak ki
console.error('(Próba) Hiba történt!');       // Hogyha szeretnénk hibaüzenetet kiírni, használhatjuk az "error" metódust is, ez ugyanazokat tudja, mint fentebb a log

/* Változókat a "let" kulcsszóval tudunk létrehozni.
   Ezek a változók csak abban a blokkban léteznek, amelyben létrejöttek, és annak alblokkjaiban
   Kezdőértéket nem kötelező adni nekik, ilyenkor az értékük nincs definiálva, vagyis undefined.
   Többféle változót tudunk létrehozni */
let almafa = 'alma';  // Az almafa egy szöveget tárol és mindenhonnan látható.
let uresalmafa;       // Az uresalmafa nem kapott értéket, tehát ő undefined.
{
    console.log(almafa);     // A külső blokkból származó almafa látszódik.
    let barackfa = 'barack'; // De a barackfa csak ebben a blokkban látható, vagy további alblokkokban.
}
/* Az alábbi try-catch blokk ismerős lehet más nyelvekből.
   Megpróbáljuk kívülről elérni a barackfát, hogyha a try blokkban bárhol hiba keletkezik,
   azt a catch blokk elkapja és kiírja a konzolra. */
try {
    console.log(barackfa); // Sajnos a barackfa nem érhető el innen.
} catch (hiba) {
    console.error(hiba);   // Az az üzenet fog minket fogadni, hogy a barackfa nincs definiálva.
}
let tomb = [1, 2, 3, 4];     // Ez egy számokat tartalmazó tömb
let vegyes = [1, 'a', true]; // Ez egy vegyes típusokat tartalmazó tömb (szám, szöveg, logikai)
let kallax = {               // Ez pedig egy objektum különböző tulajdonságokkal.
    szin: 'fehér',           // Az objektumok a tömböknél egy fokkal bonyolultabb szerkezetek
    cikkszam: '302.758.61',  // Komplexebb dolgok ábrázolására használhatóak
    szelesseg: 147,
    magassag: 147,
    melyseg: 39,
    polcok: [                                   // Tömbökbe további tömböket is lehet pakolni
        ['könyvek', 'játékkonzol', null, null], // A tartalom tömb további 4 tömböt tartalmaz
        ['könyvek', 'játékok', null, 'társas'], // Ez reprezentálja a képzeletbeli Kallax polcait (a null üres polcot jelent)
        ['könyvek', null, null, 'társas'],
        ['könyvek', 'társas', 'társas', 'társas']
    ],
    rogzitett: true
};
console.log(kallax.szin);
/* A szövegeket nem csak ' ' és " " közé tudjuk írni, hanem ` ` (magyar billentyűzeten AltGr+7 kombináció) közé is.
   Ezt sablon literálnak (template literal) nevezik. Hogyha egy ilyen szövegbe ${ }-be foglalunk bármilyen kódot,
   ami valamilyen értéket ad vissza, az az érték behelyettesítődik a szövegbe.
   Például a Kallaxunk méretét meg tudjuk adni X*Y*Z formátumban a következő képpen: */
console.log(`A Kallax mérete: ${kallax.szelesseg}*${kallax.magassag}*${kallax.melyseg}`); // A konzolon megjelenik: "A Kallax mérete: 147*147*39"
// Logikai vizsgálatokat pedig végezhetünk az if kulcsszóval:
if (kallax.szin == 'fehér') { console.log('A Kallax fehér.'); } // Itt összehasonlítást végzünk
else { console.log('A Kallax nem fehér.'); }
/* Rövidebb logikai vizsgálatnál azonban használhatjuk a hármas (ternary) operátort.
   Ez hasznos lehet, hogyha például szövegbe szeretnénk valamit beilleszteni, ami valamitől függ.
   A hármas operátor használata a következő:
   feltétel ? igaz ág : hamis ág
   Példa: bizonságos-e a Kallaxunk? */
console.log(`A Kallax ${ kallax.rogzitett ? 'biztonságos.' : 'balesetveszélyes!' }`);
// Ezekből többet is egymásba tudunk fűzni.
console.log(`A Kallax ${ kallax.rogzitett ? 'biztonságos.' : ( kallax.szelesseg < 147 ? 'balesetveszélyes, de kicsi.' : 'balesetveszélyes ÉS nagy!') }`);

/* Konstansokat a "const" kulcsszóval tudunk létrehozni.
   Láthatóságban ugyanúgy működik, mint a let, azonban nekik később nem lehet új értéket adni, így kötelező kezdő értéket is adni.
   Új értéket később ugyan nem lehet adni neki, viszont a tartalmazott dolgot tudjuk változtatni. */
const kortefa = 'korte';
try {
    kortefa = 'szilva';  // Megpróbáljuk felülírni az eredeti objektumot egy új objektummal
} catch (hiba) {
    console.error(hiba); // De sajnos ezt nem lehet megcsinálni.
}
const szilvafa = {
    termes: 'szilva',
    magassag: 13
};
szilvafa.termes = 'korte'; // Ez egy érvényes művelet
console.log(szilvafa);     // A szilvafán mostantól körte terem

/* Létezik egy harmadik fajta változó létrehozási mód is, ez a "var" kulcsszóval történik.
   Az ezzel létrehozott értékek globálisan láthatóak onnantól kezdve, hogy létrejöttek,
   kivéve ha egy függvény törzsében jöttek létre, akkor csak a függvényen belül láthatóak. */
{
    var kismacska = 'kismacska';
}
console.log(kismacska);


let tomb2 = [432, 136, 645, 782, 942, 371];
/* A for, while és do-while ciklusok itt is léteznek.
   A tömböket ezek segítségével több módon is be lehet járni.
   Például a klasszikus for ciklussal: */
for (let i = 0; i < tomb2.length; i++) {
    console.log(tomb2[i]);
}
// Iteratív módon végig lépkedve az elemeken:
for (let elem of tomb2) {
    console.log(elem);
}
// Iteratív módon az indexeken végig lépkedve és azokat felhasználva elérni a tényleges elemeket:
for (let index in tomb2) {
    console.log(tomb2[index]);
}
// De akár while ciklussal is:
let jelenlegi = 0;
while (jelenlegi < tomb2.length) {
    console.log(tomb2[jelenlegi]);
    jelenlegi++;
}
// Vagy do-while ciklussal:
jelenlegi = 0;
do {
    console.log(tomb2[jelenlegi]);
    jelenlegi++;
} while (jelenlegi < tomb2.length);


// Függvényeket nagyon könnyen tudunk alkotni:
function fgv1() {
    console.log('Ez a fgv1'); // Jelez a függvény
}
fgv1(); // Így pedig meg is hívódnak
function fgv2(szam) {
    return szam * 2; // A függvény a kapott számot megduplázza és vissza is adja
}
console.log('A fgv2(42) eredménye:', fgv2(42));

/* A JavaScript egyik leghasznosabb tulajdonsága, hogy a tömbök beépített tömbfüggvényekkel rendelkeznek.
   Ezek gyakorlatilag a programozási tételeket valósítják meg és nagyban megkönnyítik az életünket (ha jól vannak használva) */

// Az alábbi tömb film objektumokat tartalmaz, ezen fogunk dolgozni
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

/* A tömbfüggvények egy predikátumot kérnek, amelyek valamilyen módon egy logikai értéket állapítanak meg a tömb egyik eleméről.
   Például az alábbi predikátum megállapítja egy filmről, hogy azt Christopher Nolan rendezte-e: */
function nolan(film) {
    return film.rendezo == 'Christopher Nolan';
}
// Kézzel lefuttatva az első két filmre...
console.log(nolan(filmek[0])); // egy hamis
console.log(nolan(filmek[1])); // és egy igaz értéket kapunk
// A tömbfüggvények hasonlóan minden elemre elvégzik a kapott függvényt és az alapján cselekszenek

/* Nézzük meg, hogy mely filmeket rendezte Christopher Nolan!
   Ehhez a filter tömbfüggvényt fogjuk használni, ami a kiválogatás tételnek felel meg. */
console.log('Christopher Nolan filmjei:', filmek.filter(nolan));

/* Predikátumot más módon is meg tudunk adni. Használhatjuk a nyíl függvényeket.
   A nyíl függvények alapvető működésükben hasonlítanak a normál függvényekhez,
   a különbségeikkel egyelőre nem foglalkozunk.
   Nyíl függvény segítségével keressünk olyan filmet, ami 2010 után jelent meg!
   Ehhez a find tömbfüggvényt fogjuk használni, ami a keresés tételnek felel meg. */
console.log('Van-e 2010 utáni film?', filmek.find((film) => film.ev > 2010));

/* Van-e milliárd dolláros bevételt átlépő film?
   Ehhez a some függvényt fogjuk használni, ami az eldöntés tételnek felel meg. */
console.log('Van-e milliárd dolláros bevételű film?', filmek.some((film) => film.bevetel >= 1000));

/* Az összes film elért legalább 250 millió dolláros bevételt?
   Ehhez az every függvényt fogjuk használni, ami szintén az eldöntés egyik formája. */
console.log('Minden film legalább 250 millió dollár bevételt szerzett?', filmek.every((film) => film.bevetel >= 250));

/* Mielőtt továbblépnénk a következő tételre, nézzük meg a map-et.
   A map a tömb összes elemét áttolja egy függvényen, ami valamilyen transzformációt végez.
   Például az alábbi példában a filmek adataiból csak a bevételüket tartjuk meg. */
console.log('Csak a bevételek:', filmek.map((film) => film.bevetel));

/* A további néhány példában a reduce függvény kerül használatba.
   Ez az összegzésnek feleltethető meg és rengeteg mindenre használható.
   Az előző példát felhasználva számoljuk ki az összbevételt. */
console.log('Az összbevétel:', filmek.map((film) => film.bevetel).reduce((osszeg, aktualis) => osszeg + aktualis));
console.log('Az összbevétel:', filmek.reduce((osszeg, aktualis) => osszeg + aktualis.bevetel, 0));
/* A reduce minden egyes elem után frissíti az első paramétert, ezesetben az osszeget a függvény visszatérési értékére.
   Felmerülhet a kérdés: miért van map az első megoldásban és miért nincs a másodikban?
   A lényeg a reduce működése! A reduce alapból kezdőértéknek a tömb legelső elemét fogja venni,
   tehát az első elemet kihagyva, a második elemmel kezd és az osszeg ebben a pillanatban a map-elt tömb első elemét tartalmazza.
   Ez teljesen jó nekünk, hiszen csak számokat tartalmaz, a számokat pedig össze tudjuk adni.
   A második példában viszont film objektumokat vizsgál, így alaphelyzetben az osszeg az első film objektumot tartalmazná,
   ehhez pedig nem tudunk számot hozzáadni. Ehelyett a reduce a predikátum mellett paraméterként elfogad kezdőértéket is.
   Hogyha kap a reduce kezdőértéket, akkor az osszeg azzal fog indítani, nem pedig az első elemmel, az aktualis pedig nem fogja átugrani
   a második elemet. Így az összeghez hozzá tudunk adni, hiszen az egy szám, az aktualisból pedig könnyen le tudjuk kérdezni a bevételt. */

/* Keressük meg a legtöbb bevételt szerzett filmet (maximum kiválasztás).
   Ehhez megint a reduce-ot tudjuk használni. */
console.log('A legtöbb bevételt szerzett film:', filmek.reduce((maximum, aktualis) => maximum.bevetel < aktualis.bevetel ? aktualis : maximum));

/* Végül a tömbök metódusai között van egy szintén bejárást szolgáló metódus.
   Ez a forEach. A forEach szintén egy függvényt kér, ami valamit kezd a kapott elemekkel. */
filmek.forEach((film, index) => {
    console.log(`${index}. film: ${film.cim} (${film.ev})`);
});
/* Ezesetben két paraméteres függvényt adunk át. Az első paraméter mindig az aktuális elem,
   a második pedig az aktuális elem indexe. */