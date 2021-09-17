# Házi feladat

Az AmonGalactica űrutazási-ügynökség igazgatói tanácsa éppen belső vizsgálatot végez az űrhajóikon egyre gyakrabban felbukkanó meghibásodások ügyében. Most egy nagyon fontos utazást kellett megszakítani az indításkor. A hiba okát a fedélzeti számítógép naplójából ki lehet deríteni, azonban a kiolvasáshoz fel kell dolgozni a tartalmát.

```
[
    {
        tipus: 'siker',
        kod: '00001',
        uzenet: 'A kernel sikeresen elindult',
        ido: 0,
        kritikus: false
    },
    {
        tipus: 'siker',
        kod: '00002',
        uzenet: 'A központi számítógép üzemképes',
        ido: 3,
        kritikus: false
    },
    {
        tipus: 'uzenet',
        kod: '00107',
        uzenet: 'Indítás előtti diagnosztika elkezdődött',
        ido: 5,
        kritikus: false
    },
    {
        tipus: 'hiba',
        kod: 'XXXXX',
        uzenet: 'Elfogyott a büféből a rizs',
        ido: 8,
        kritikus: false
    },
    {
        tipus: 'siker',
        kod: '02001',
        uzenet: 'Az üzemanyag szintje megfelelő',
        ido: 10,
        kritikus: false
    },
    {
        tipus: 'hiba',
        kod: '02047',
        uzenet: 'A jobb visszapillantó-motor nem válaszol',
        ido: 11,
        kritikus: false
    },
    {
        tipus: 'siker',
        kod: 'XXXXX',
        uzenet: 'A kávéautomata fel van töltve',
        ido: 12,
        kritikus: false
    },
    {
        tipus: 'hiba',
        kod: '02991a',
        uzenet: 'A bal hajtómű gyújtása meghibásodott',
        ido: 14,
        kritikus: true
    },
    {
        tipus: 'hiba',
        kod: '99999',
        uzenet: 'Kritikus rendszerhiba: あなたの基地はすべて私たちのものです',
        ido: 34,
        kritikus: true
    },
    {
        tipus: 'uzenet',
        kod: '00000',
        uzenet: 'A rendszer megkezdi az indítás megszakítását',
        ido: 40,
        kritikus: false
    }
]
```

## Feladatok

A feladat során egy táblázatot kell majd felépíteni.

1. Készíts egy táblázatot, amiben soronként megjelenik a naplóbejegyzések kódja, üzenete és az indítás óta eltelt idő.

2. A `siker` típusú bejegyzések sorait zöld színnel, a `hiba` típusú bejegyzések sorait pedig piros színnel jelöld!

2. A kritikus hibákat jelöld vastagbetűvel!

### Minta:

![Minta a táblázathoz](minta.png)