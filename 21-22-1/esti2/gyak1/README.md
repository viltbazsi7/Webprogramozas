# Házi feladat (1 pont)

Az AmonGalactica űrutazási-ügynökség az elmúlt időszakban rengeteg meghibásodással nézett szembe. Az igazgatói tanács belső vizsgálatot rendelt el az ügyben. Első körben a pilótákat fogják megvizsgálni, akiknek az adatai lentebb láthatóak:

```
[
    {
        nev: 'Zöld',
        azonosito: 'AU4321',
        fenyev: 142,
        meghibasodas: 3
    },
    {
        nev: 'Piros',
        azonosito: 'IM9569',
        fenyev: 78,
        meghibasodas: 14,
    },
    {
        nev: 'Kék',
        azonosito: 'AU3861',
        fenyev: 94,
        meghibasodas: 6
    },
    {
        nev: 'Sárga',
        azonosito: 'AU2475',
        fenyev: 41,
        meghibasodas: 2
    },
    {
        nev: 'Barna',
        azonosito: 'IM9362',
        fenyev: 88,
        meghibasodas: 8
    },
    {
        nev: 'Szürke',
        azonosito: 'AU1999',
        fenyev: 105,
        meghibasodas: 0
    },
    {
        nev: 'Fekete',
        azonosito: 'IM9671',
        fenyev: 37,
        meghibasodas: 5
    }
]
```

## Feladatok

A feladatok megoldásában a tömbfüggvények használata javasolt!

1. Az igazgatói tanács szeretné szűkíteni a vizsgálandó pilóták körét. Egy listában kérik azoknak a pilótáknak az azonosítóit, akik utazásai során legalább 6 meghibásodás történt.

2. Ezenkívül külön szeretnék látni az összes `IM`-el kezdődő azonosítóval rendelkező pilóta azonosítóját és a meghibásodások számát. (Ebben a [`startsWith`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith) függvény segíthet!)

2. Az igazgatói tanács végül szeretné tudni, hogy melyik pilóta vezette a legtöbbet. Az azonosító mellé a nevét is kérik, hogy névreszóló üzenetben gratuláljanak neki.